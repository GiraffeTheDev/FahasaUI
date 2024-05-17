import MenuIcon from "@mui/icons-material/Menu";

import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/input/Search";
import { headerIcons } from "../../utils/common";
const Header = () => {
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
        <MenuIcon></MenuIcon>
        <Search></Search>
        {headerIcons.map((item) => (
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
