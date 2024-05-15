import React from "react";
import classNames from "../classname/className";

const Label = ({ htmlFor = "", className = "", children, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        "text-sm font-medium  cursor-pointer py-[10px] inline-block dark:text-black",
        className
      )}
    >
      {children}
    </label>
  );
};

export default Label;
