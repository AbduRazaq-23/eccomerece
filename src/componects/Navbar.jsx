import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 w-full  text-gray-600 flex justify-between items-center text-center  py-5 px-10 ">
      <div className="hidden sm:block md:flex space-x-2  justify-center items-center text-center">
        <p>EN</p>
        <input
          className="h-8 rounded-md border-2"
          type="text"
          placeholder="Search"
        />
        <AiOutlineSearch className=" text-2xl" />
      </div>
      <h1 className="text-3xl ">eccomerece.</h1>
      <ul className="flex  space-x-4 cursor-pointer">
        <Link to="/signin">
          <li>SignIn</li>
        </Link>
        <Link to="/signup">
          <li>SignUp</li>
        </Link>

        <AiOutlineShoppingCart className="text-2xl" />
      </ul>
    </div>
  );
};

export default Navbar;
