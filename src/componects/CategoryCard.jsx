import React from "react";

const CategoryCard = ({ item }) => {
  return (
    <div>
      <div className="mt-20 w-full h-[300px]  shadow-md ">
        <img
          className="h-full w-full rounded-t-md"
          src={item.img}
          alt={item.title}
        />
        <p className="font-semibold py-3">{item.title}</p>
        <button className="py-1 px-4 border-2 rounded-xl text-blue-600">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
