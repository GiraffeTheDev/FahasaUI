import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "../../components/classname/className";

const NavigationBar = ({ menu = [], className = "" }) => {
  return (
    <div
      className={`flex items-center justify-between  mx-auto ${className} overflow-x-auto whitespace-nowrap`}
    >
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
