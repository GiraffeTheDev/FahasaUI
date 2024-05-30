import React from "react";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import Heading from "../Heading";
import TableGenres from "./TableGenres";

const ManageGenres = () => {
  return (
    <>
      <Heading title={"Quản lý thể loại"}></Heading>
      <Button
        type="button"
        href="/manage/add-genres"
        kind={"semi"}
        className="max-w-[200px]"
      >
        Thêm thể loại
      </Button>
      <GapRow></GapRow>
      <TableGenres></TableGenres>
    </>
  );
};

export default ManageGenres;
