import React, { useState } from "react";

import EyeCloseIcon from "../icon/EyeCloseIcon";
import EyeIcon from "../icon/EyeIcon";
import Input from "./Input";

const InputPassword = ({ control, error, name = "password", className }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Input
      placeholder="Nhập vào mật khẩu"
      type={toggle ? "text" : "password"}
      name={name}
      control={control}
      error={error}
      className={className}
    >
      {toggle ? (
        <EyeIcon onClick={() => setToggle(false)}></EyeIcon>
      ) : (
        <EyeCloseIcon onClick={() => setToggle(true)}></EyeCloseIcon>
      )}
    </Input>
  );
};

export default InputPassword;
