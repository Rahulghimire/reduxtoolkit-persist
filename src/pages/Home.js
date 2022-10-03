import React from "react";
import Products from "../components/Products";
const Home = () => {
  return (
    <div>
      <h1 className="text-3xl text-center py-5 font-bold">
        Welcome to ReduxToolkit Store
      </h1>
      <section>
        <Products />
      </section>
    </div>
  );
};

export default Home;
