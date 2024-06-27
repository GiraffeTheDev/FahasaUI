import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { create } from "../../../api/publisher";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";

const PublisherAddNew = () => {
  const { control, handleSubmit } = useForm({ mode: "onSubmit" });

  const navigate = useNavigate();
  const handleAddPublisher = async (value) => {
    try {
      const response = await create(value);
      if (response.status === 200) {
        Swal.fire({
          title: "Thêm mới thành công",
          icon: "success",
        });
        navigate("/manage/publisher");
      }
    } catch (error) {
      Swal.fire({
        title: "Thêm mới thất bại",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Thêm nhà xuất bản
        </h2>
        <form onSubmit={handleSubmit(handleAddPublisher)}>
          <Label htmlFor="name">Tên nhà xuất bản</Label>
          <Input
            name="name"
            control={control}
            placeholder="Nhập vào tên nhà xuất bản"
          ></Input>
          <GapRow></GapRow>
          <Button type="submit" kind="primary">
            Thêm nhà xuất bản
          </Button>
        </form>
      </div>
    </>
  );
};

export default PublisherAddNew;
