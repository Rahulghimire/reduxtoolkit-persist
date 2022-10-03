import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div style={{ display: "flex" }}>
      <h2>REDUX STORE</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li style={{ paddingLeft: "30px" }}>
            <Link to="/cart">Cart</Link>
          </li>
          <span
            style={{
              paddingLeft: "80px",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Cart Items:{items.length}
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
