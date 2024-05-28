import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classNames from "../components/classname/className";
import { sidebarAccount } from "../utils/common";

const LayoutAccount = () => {
  return (
    <div className="flex items-start mt-5 gap-x-5">
      <div className="w-[280px] bg-white min-h-[500px]">
        <h1 className="pl-5 mt-5 text-xl font-semibold uppercase text-primary">
          Tài khoản
        </h1>
        <div className="flex flex-col px-2 mt-5 gap-y-2">
          {sidebarAccount.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={classNames(
                ({ isActive }) => (isActive ? "active" : "border-black"),
                "border rounded-lg px-5 py-2  text-black"
              )}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex-1 w-full px-10 pt-5 pb-[80px] bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutAccount;
