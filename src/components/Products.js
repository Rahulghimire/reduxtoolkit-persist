import axios from "axios";
import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const fetchProducts = async () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        console.log(products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="mx-20">
      {products.map((product) => {
        return (
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
                    onClick={() => handleAdd(product)}
                    className="bg-[#A91079] hover:bg-[#F806CC] text-white rounded-lg font-normal p-[5px]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
