import MenuIcon from "@mui/icons-material/Menu";

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Search from "../../components/input/Search";
import { headerIconUser, headerIcons } from "../../utils/common";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const menu = user ? headerIconUser : headerIcons;
  return (
    <div className="w-full bg-white">
      <div className="w-[1250px] mx-auto flex items-center py-2 bg-white gap-x-5">
        <Link to={"/"}>
          <img
            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
            alt="logo"
            className="w-[300px] h-14"
          />
        </Link>
        <Link to={"/bookpage"}>
          {" "}
          <MenuIcon></MenuIcon>
        </Link>
        <Search></Search>
        {menu.map((item) => (
          <Link key={item.id} to={item.to}>
            <div className="flex flex-col items-center">
              {item.icon}
              <span>{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
