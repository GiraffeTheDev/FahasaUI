import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../modules/admin/Header";
import Sidebar from "../modules/admin/Sidebar";

const LayoutAdmin = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null || user.isAdmin !== true) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <div className="flex-1">
          <Header></Header>
          <div className="px-5 pb-10">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
