import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../modules/client/Footer";
import Header from "../modules/client/Header";
const LayoutMain = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("user", user);
  return (
    <div className="h-full bg-gray1">
      <div className="h-[60px] w-full ">
        <img
          src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2024/Diamond_0524_Ver2_LeMayHeader_1263x60.jpg"
          className="object-cover w-full h-full"
          alt="banner"
        />
      </div>
      <Header></Header>
      <div className="w-[1250px] mx-auto">
        <Outlet></Outlet>
      </div>
      <div className="w-[1250px] mx-auto mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LayoutMain;
