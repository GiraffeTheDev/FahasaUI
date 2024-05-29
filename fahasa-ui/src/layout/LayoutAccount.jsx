import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import classNames from "../components/classname/className";
import { handleLogout } from "../redux/auth/handlers";
import { sidebarAccount } from "../utils/common";
const LayoutAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [navigate, user]);
  return (
    <div className="flex items-start mt-5 gap-x-5">
      <div className="w-[280px] bg-white min-h-[500px]">
        <h1 className="pl-5 mt-5 text-xl font-semibold uppercase text-primary">
          Tài khoản
        </h1>
        <div className="flex flex-col px-2 mt-5 gap-y-2">
          {sidebarAccount.length > 0 &&
            sidebarAccount.map((item) => {
              if (item.to === "/logout") {
                return (
                  <button
                    onClick={() => dispatch(handleLogout())}
                    key={item.id}
                    className="flex items-center px-5 py-2 text-gray-900 border border-black rounded-lg dark:text-white gap-x-3 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    {item.title}
                  </button>
                );
              } else {
                return (
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
                );
              }
            })}
        </div>
      </div>
      <div className="flex-1 w-full px-10 pt-5 pb-[80px] bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutAccount;
