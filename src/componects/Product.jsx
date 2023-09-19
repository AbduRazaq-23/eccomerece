import { React, useState } from "react";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";

const Product = ({ item }) => {
  const [isIcon, setIsICon] = useState(<MdFavoriteBorder />);

  const clickIcon = () => {
    setIsICon(!isIcon);
    isIcon && alert("added to favourite");
  };

  return (
    <div className="w-full h-[250px] bg-slate-200 mb-10">
      <div className="relative">
        <img className="h-[250px] w-full " src={item.img} alt={item.id} />
        <div className="flex space-x-3 py-2 justify-center items-center absolute bg-slate-200 w-full">
          <AiOutlineShoppingCart size={30} />
          {isIcon ? (
            <MdFavoriteBorder onClick={clickIcon} size={30} />
          ) : (
            <AiFillHeart onClick={clickIcon} size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
