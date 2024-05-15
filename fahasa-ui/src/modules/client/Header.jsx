import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/input/Search";
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
        <div className="flex flex-col items-center">
          <NotificationsNoneIcon></NotificationsNoneIcon>
          <span>Thông báo</span>
        </div>
        <div className="flex flex-col items-center">
          <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>
          <span>Giỏ hàng</span>
        </div>
        <div className="flex flex-col items-center">
          <PersonOutlineIcon></PersonOutlineIcon>
          <span>Tài khoản</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
