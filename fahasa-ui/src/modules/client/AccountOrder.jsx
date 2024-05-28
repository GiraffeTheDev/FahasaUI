import React from "react";
import { naviOrder } from "../../utils/constant";
import NavigationBar from "./NavigationBar";

const AccountOrder = () => {
  return (
    <div className="min-h-[400px]">
      <NavigationBar menu={naviOrder}></NavigationBar>
    </div>
  );
};

export default AccountOrder;
