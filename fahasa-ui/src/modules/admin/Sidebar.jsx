import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { handleLogout } from "../../redux/auth/handlers";
import { menuAside } from "../../utils/constant";
const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <aside className="shadow-md w-[260px] h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full px-3 py-4 overflow-y-auto rounded-xl bg-gray-50 dark:bg-gray-800">
        <div className="w-full mb-3">
          <img
            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
            alt=""
            className="object-cover w-full"
          />
        </div>
        <ul className="space-y-2 font-medium">
          {menuAside.length > 0 &&
            menuAside.map((item) => {
              if (item.url === "/logout") {
                return (
                  <button
                    onClick={() => dispatch(handleLogout())}
                    key={uuidv4()}
                    className="flex items-center px-4 py-3 text-gray-900 rounded-lg dark:text-white gap-x-3 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span>{item.icon}</span>
                    <span> {item.title}</span>
                  </button>
                );
              } else {
                return (
                  <NavLink to={item.url} key={uuidv4()}>
                    <span className="flex items-center p-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      {item.icon}
                      <span className="ms-3">{item.title}</span>
                    </span>
                  </NavLink>
                );
              }
            })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
