import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "../components/classname/className";
import { sidebarAccount } from "../utils/common";

const AccountClientPage = () => {
  return (
    <>
      <div className="flex items-start mt-5 gap-x-5">
        <div className="w-[280px] bg-white min-h-[500px]">
          <h1 className="pl-5 mt-5 text-xl font-semibold uppercase text-primary">
            Tài khoản
          </h1>
          <div className="flex flex-col px-2 mt-5 gap-y-5">
            {sidebarAccount.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                className={classNames(
                  ({ isActive }) => (isActive ? "active" : ""),
                  "border-b-[1px] py-2 border-gray2 text-gray"
                )}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full px-10 py-5 bg-white">
          <h1 className="text-xl uppercase">Bảng điều khiển của khách hàng</h1>
        </div>
      </div>
    </>
  );
};

export default AccountClientPage;
