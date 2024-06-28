import React from "react";
import Heading from "../Heading";
import TableStorage from "./TableStorage";

const StorageBook = () => {
  return (
    <div>
      <Heading title={"Quản lý kho sách"}></Heading>
      <TableStorage></TableStorage>
    </div>
  );
};

export default StorageBook;
