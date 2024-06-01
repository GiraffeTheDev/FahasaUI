import React from "react";
import Heading from "../Heading";
import UserTable from "./UserTable";

const ManageUser = () => {
  return (
    <div>
      <Heading title={"Quản lý người dùng"}></Heading>
      <UserTable></UserTable>
    </div>
  );
};

export default ManageUser;
