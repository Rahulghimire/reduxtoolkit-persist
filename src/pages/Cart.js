import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <h3 className="my-5 text-center text-3xl text-bold">Cart</h3>
      <div>
        {products.map((product) => (
          <div className="inline-flex p-4" key={product.id}>
            <div className="mt-10 max-w-xs rounded overflow-hidden shadow-lg object-center text-center">
              <div className="object-center">
                <img
                  className="w-72 h-72"
                  src={product.image}
                  alt="Sunset in the mountains"
                />
              </div>

              <div className="px-4 py-2">
                <div className="font-bold text-xl mb-2 truncate">
                  {product.title}
                </div>
                <p className="text-gray-700 text-base truncate ...">
                  {product.description}
                </p>
                <p className="text-gray-900 text-base capitalize">
                  {product.category}
                </p>
                <p className="font-bold">${product.price}</p>
                <div className=" p-3 text-center">
                  <button
                    onClick={() => {
                      handleRemove(product.id);
                    }}
                    className="bg-[#A91079] hover:bg-[#F806CC] text-white rounded-lg font-normal p-[5px]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
