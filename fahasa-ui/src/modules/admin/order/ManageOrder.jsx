import React from "react";
import Heading from "../Heading";
import OrderTable from "./OrderTable";

const ManageOrder = () => {
  return (
    <>
      <Heading title={"Quản lý đơn đặt hàng"}></Heading>
      <OrderTable></OrderTable>
    </>
  );
};

export default ManageOrder;
