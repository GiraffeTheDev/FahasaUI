import React from "react";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import Heading from "../Heading";
import AuthorTable from "./AuthorTable";

const ManageAuthor = () => {
  return (
    <>
      <Heading title={"Quản lý tác giả"}></Heading>
      <Button
        type="button"
        kind="semi"
        href={"/manage/add-author"}
        className="max-w-[300px]"
      >
        Thêm mới tác giả
      </Button>
      <GapRow></GapRow>
      <AuthorTable></AuthorTable>
    </>
  );
};

export default ManageAuthor;
