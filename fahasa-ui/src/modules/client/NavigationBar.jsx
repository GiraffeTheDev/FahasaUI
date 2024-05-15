import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "../../components/classname/className";
const menu = [
  { id: 1, title: "Đăng nhập", to: "/login" },
  { id: 2, title: "Đăng kí", to: "/register" },
];
const NavigationBar = () => {
  return (
    <div className="flex items-center justify-between max-w-[300px] mx-auto">
      {menu.map((item) => (
        <div key={item.id} className="px-4 py-3">
          <NavLink
            to={item.to}
            className={classNames(
              ({ isActive }) => (isActive ? "active" : ""),
              "w-full"
            )}
          >
            {item.title}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;
