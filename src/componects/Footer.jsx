import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsMessenger,
  BsTwitter,
} from "react-icons/bs";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="w-full px-6 bg-gray-500 h-[270px] text-gray-100  bottom-0">
      <div className="flex ">
        <div className=" flex-1  space-y-3 px-3 py-5">
          <h1 className="text-3xl font-semibold">commerece.</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </p>
          <div className="flex space-x-3 text-blue-100">
            <BsFacebook size={22} />
            <BsInstagram size={22} />
            <BsTwitter size={22} />
            <BsMessenger size={22} />
          </div>
        </div>
        <div className=" flex-1 space-y-3 px-3 py-5">
          <h1 className="text-3xl font-semibold">Useful Links</h1>
          <ul>
            <li>SignUp</li>
            <li>SignIn</li>
          </ul>
        </div>
        <div className=" flex-1 space-y-3 px-3 py-5">
          <h1 className="text-3xl font-semibold">Contacts</h1>
          <ul className="space-y-3">
            <li className="flex space-x-2">
              <FaLocationDot size={20} />
              <span>Forest Bazar Peshawar.</span>
            </li>
            <li className="flex space-x-2">
              <FaPhone size={20} />
              <span>+92546863</span>
            </li>
            <li className="flex space-x-2">
              <HiOutlineMail size={20} />
              <span>khan23@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
