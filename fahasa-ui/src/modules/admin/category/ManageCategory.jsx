import React from "react";
import Button from "../../../components/button/Button";
import Heading from "../Heading";
import CategoryTable from "./CategoryTable";

const ManageCategory = () => {
  return (
    <>
      <Heading title={"Quản lý danh mục sản phẩm"}></Heading>
      <Button
        type="button"
        href="/manage/add-category"
        kind={"semi"}
        className="max-w-[300px]"
      >
        Thêm danh mục sản phẩm
      </Button>
      <div className="w-full mt-5">
        <CategoryTable></CategoryTable>
      </div>
    </>
  );
};

export default ManageCategory;
