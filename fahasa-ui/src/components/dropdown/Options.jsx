import React from "react";
import { useDropdown } from "./dropdown-context";

const Options = (props) => {
  const { setShow } = useDropdown();
  const { onClick } = props;
  const hanldeClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="flex items-center px-5 py-4 text-sm transition-all cursor-pointer text-text4 hover:text-primary"
      onClick={hanldeClick}
    >
      {props.children}
    </div>
  );
};

export default Options;
