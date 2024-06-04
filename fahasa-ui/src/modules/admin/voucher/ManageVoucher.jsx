import React from "react";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import Heading from "../Heading";
import VoucherTable from "./VoucherTable";

const ManageVoucher = () => {
  return (
    <>
      <Heading title={"Quản lý mã giảm giá"}></Heading>
      <Button
        kind="semi"
        type="button"
        href="/manage/add-voucher"
        className="max-w-[300px]"
      >
        Thêm mã giảm giá
      </Button>
      <GapRow></GapRow>
      <VoucherTable></VoucherTable>
    </>
  );
};

export default ManageVoucher;
