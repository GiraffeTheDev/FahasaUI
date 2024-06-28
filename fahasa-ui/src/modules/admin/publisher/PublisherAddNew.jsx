import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as yup from "yup";
import { create } from "../../../api/publisher";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";
import DotSpinner from "../../../components/loading/DotSpinner";
const schema = yup.object({
  name: yup.string().required("Nhập vào tên nhà xuất bản"),
});
const PublisherAddNew = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const handleAddPublisher = async (value) => {
    setIsSubmitting(true);
    try {
      const response = await create(value);
      if (response.status === 200) {
        setIsSubmitting(false);
        Swal.fire({
          title: "Thêm mới thành công",
          icon: "success",
        });
        navigate("/manage/publisher");
      }
    } catch (error) {
      setIsSubmitting(false);
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
          {errors?.name ? (
            <p className="mt-2 text-sm text-red-500">{errors?.name?.message}</p>
          ) : (
            ""
          )}
          <GapRow></GapRow>
          <Button
            type="submit"
            kind="primary"
            disabled={isSubmitting}
            className={`${isSubmitting ? "opacity-[0.5]" : ""}`}
          >
            {isSubmitting ? <DotSpinner></DotSpinner> : "Thêm nhà xuất bản"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default PublisherAddNew;
