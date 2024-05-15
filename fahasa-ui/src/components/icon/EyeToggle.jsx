import React from "react";
import EyeCloseIcon from "./EyeCloseIcon";
import EyeIcon from "./EyeIcon";

const EyeToggle = ({ open = false, onClick = () => {} }) => {
  if (!open) return <EyeCloseIcon onClick={onClick}></EyeCloseIcon>;
  return <EyeIcon onClick={onClick}></EyeIcon>;
};

export default EyeToggle;
