import MenuIcon from "@mui/icons-material/Menu";

import { Box, CardMedia } from "@mui/material";
import React from "react";
import Search from "../../components/input/Search";
const Header = () => {
  return (
    <Box className="flex items-center justify-between bg-gray-500">
      <CardMedia
        width={200}
        height={140}
        component={"img"}
        image="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
      ></CardMedia>
      <MenuIcon></MenuIcon>
      <Search></Search>
    </Box>
  );
};

export default Header;
