import React from "react";
import Announcement from "../componects/Announcement";
import Navbar from "../componects/Navbar";
import Slider from "../componects/Slider";
import Categories from "../componects/Categories";
import Products from "../componects/Products";
import NewsLetter from "../componects/NewsLetter";
import Footer from "../componects/Footer";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
