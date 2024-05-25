import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../modules/admin/Header";
import Sidebar from "../modules/admin/Sidebar";

const LayoutAdmin = () => {
  return (
    <>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <div className="flex-1">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
