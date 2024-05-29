import React from "react";
import Heading from "../Heading";
import BookTable from "./BookTable";

const ManageBook = () => {
  return (
    <>
      <Heading title={"Quản lý sách"}></Heading>
      <BookTable></BookTable>
    </>
  );
};

export default ManageBook;
