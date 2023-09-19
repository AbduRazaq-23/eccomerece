import React from "react";
import { categories } from "../data";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 mx-10  ">
      {categories.map((item) => {
        return <CategoryCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Categories;
