import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../modules/client/Header";
const LayoutMain = () => {
  return (
    <>
      <div className="h-[60px] w-full ">
        <img
          src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2024/Diamond_0524_Ver2_LeMayHeader_1263x60.jpg"
          className="object-cover w-full h-full"
          alt="banner"
        />
      </div>
      <div className="w-[1250px] mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default LayoutMain;
