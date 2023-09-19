import React from "react";
import { IoSend } from "react-icons/io5";

const NewLetter = () => {
  return (
    <div className="justify-center items-center text-center space-y-2 mb-20">
      <h1 className="text-3xl font-semibold">Newsletter</h1>
      <p className="font-sm">Get timely updates from your favorite products.</p>
      <div className="flex items-center justify-center">
        <input
          className="px-3 py-1 border border-gray-400 rounded-l-md w-[30%]"
          type="email"
          placeholder="email"
        />
        <button className="border border-gray-400 px-4 py-1 rounded-r-md bg-teal-500">
          <IoSend size={24} />
        </button>
      </div>
    </div>
  );
};

export default NewLetter;
