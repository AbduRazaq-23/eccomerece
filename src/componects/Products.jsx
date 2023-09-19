import React from "react";
import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <div className="grid md:grid-cols-4 gap-4 my-40 mx-10 ">
      {popularProducts.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Products;
