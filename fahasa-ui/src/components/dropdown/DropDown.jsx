import React from "react";
import { DropdownProvider } from "./dropdown-context";

const DropDown = ({ children, ...props }) => {
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full">{children}</div>
    </DropdownProvider>
  );
};

export default DropDown;
