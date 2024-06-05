import React from "react";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import Heading from "../Heading";
import BookTable from "./BookTable";

const ManageBook = () => {
  return (
    <>
      <Heading title={"Quản lý sách"}></Heading>
      <Button
        type="button"
        kind="semi"
        href="/manage/add-book"
        className="max-w-[300px]"
      >
        Thêm mới sách
      </Button>
      <GapRow></GapRow>
      <BookTable></BookTable>
    </>
  );
};

export default ManageBook;
