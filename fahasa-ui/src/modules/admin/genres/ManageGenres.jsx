import React from "react";
import Button from "../../../components/button/Button";
import Heading from "../Heading";

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
    </>
  );
};

export default ManageGenres;
