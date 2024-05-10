import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../modules/client/Header";
const LayoutMain = () => {
  return (
    <>
      <Box
        sx={{
          height: "60px",
          width: "100%",
          backgroundImage:
            "url('https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2024/Diamond_0524_Ver2_LeMayHeader_1263x60.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
      <div className="w-[1400px] mx-auto bg-">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default LayoutMain;
