import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../modules/client/Footer";
import Header from "../modules/client/Header";
const LayoutMain = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.isAdmin === 2) {
      navigate("/dashboard");
    }
  }, [user, navigate]);
  return (
    <div className="h-full bg-gray1">
      <div className="h-[60px] w-full ">
        <img
          src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2024/NCC_0624_HuyHoang_Header_1263x60.png"
          className="w-full h-full "
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
