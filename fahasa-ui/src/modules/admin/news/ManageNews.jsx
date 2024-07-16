import React from "react";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import Heading from "../Heading";
import NewsTable from "./NewsTable";

const ManageNews = () => {
  return (
    <>
      <Heading title={"Quản lý tin tức"}></Heading>
      <Button
        type="button"
        kind="semi"
        href="/manage/add-news"
        className="max-w-[300px]"
      >
        Thêm mới tin tức
      </Button>
      <GapRow></GapRow>
      <NewsTable></NewsTable>
    </>
  );
};

export default ManageNews;
