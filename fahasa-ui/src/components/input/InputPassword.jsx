import React, { useState } from "react";

import EyeIcon from "components/icon/EyeIcon";
import EyeCloseIcon from "components/icon/EyeCloseIcon";
import Input from "./Input";

const InputPassword = ({ control, error }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Input
      placeholder="Enter your password"
      type={toggle ? "text" : "password"}
      name="password"
      control={control}
      error={error}
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
