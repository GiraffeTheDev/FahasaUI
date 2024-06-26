import React from "react";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import Heading from "../Heading";
import PublisherTable from "./PublisherTable";

const ManagePublisher = () => {
  return (
    <>
      <Heading title={"Quản lý nhà xuất bản"}></Heading>
      <Button
        type="button"
        href="/manage/add-publisher"
        kind={"semi"}
        className="max-w-[200px]"
      >
        Thêm nhà xuất bản
      </Button>
      <GapRow></GapRow>
      <div className="w-full mt-5">
        <PublisherTable></PublisherTable>
      </div>
    </>
  );
};

export default ManagePublisher;
