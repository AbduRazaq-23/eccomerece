import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

const SignIn = () => {
  return (
    <div id="/signin" className="w-full flex justify-center  h-screen py-10">
      <div className="w-[500px] bg-slate-200 shadow-xl px-3 py-8 rounded-lg   mt-50">
        <h1 className="text-3xl font-bold pb-5 text-center">SignIn</h1>
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">Name</label>
          <input
            className="p-1 rounded-md shadow-md"
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="email">Email</label>
          <input
            className="p-1 rounded-md shadow-md"
            type="text"
            name="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            className="p-1 rounded-md shadow-md"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="w-full bg-gray-400 h-0.5 mt-10   relative ">
          <h1 className="absolute flex ml-56 mt-[-12px] bg-slate-200 px-1">
            or
          </h1>
        </div>
        <div className="flex py-5 space-x-4 justify-center">
          <FcGoogle size={30} className="cursor-pointer" />
          <FaFacebook size={30} className="text-blue-600 cursor-pointer" />
        </div>

        <button className="w-full bg-white p-2 rounded-md shadow-md">
          SignIn
        </button>
      </div>
    </div>
  );
};

export default SignIn;
