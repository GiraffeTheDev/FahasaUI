import React from "react";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import Heading from "../Heading";
import SupplierTable from "./SupplierTable";

const ManageSupplier = () => {
  return (
    <>
      <Heading title={"Quản lý nhà cung cấp"}></Heading>
      <Button
        type="button"
        href="/manage/add-supplier"
        kind="semi"
        className="max-w-[300px]"
      >
        Thêm nhà cung cấp
      </Button>
      <GapRow></GapRow>
      <SupplierTable></SupplierTable>
    </>
  );
};

export default ManageSupplier;
