import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as yup from "yup";
import { create } from "../../../api/author";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import FormGroup from "../../../components/form/FormGroup";
import ImageUpload from "../../../components/image/ImageUpload";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";
import DotSpinner from "../../../components/loading/DotSpinner";
import { useImageUpload } from "../../../hooks/useImageUpload";
const schema = yup.object({
  name: yup.string().required("Nhập vào tên tác giả"),
  image: yup.string().required("Chọn hình ảnh tác giả"),
});
const AuthorAddNew = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onSubmit", resolver: yupResolver(schema) });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const handleAddAuthor = async (value) => {
    setIsSubmitting(true);
    try {
      const response = await create(value);
      if (!response.data.error) {
        setIsSubmitting(false);
        navigate("/manage/author");
        Swal.fire({
          title: "Thêm mới thành công",
          icon: "success",
        });
      }
    } catch (error) {
      setIsSubmitting(false);
      Swal.fire({
        title: "Thêm mới thất bại",
        icon: "error",
      });
      console.log(error);
    }
  };
  const { handleSelectImage, image } = useImageUpload(setValue);
  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Thêm mới tác giả
        </h2>
        <form onSubmit={handleSubmit(handleAddAuthor)}>
          <FormGroup>
            <Label htmlFor="name">Tên Tác giả</Label>
            <Input
              name="name"
              control={control}
              placeholder="Nhập vào tên thể loại"
            ></Input>
            {errors?.name ? (
              <p className="text-sm text-red-500">{errors?.name?.message}</p>
            ) : (
              ""
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Ảnh tác giả</Label>
            <ImageUpload onChange={handleSelectImage} url={image}></ImageUpload>
            {errors?.image ? (
              <p className="text-sm text-red-500">{errors?.image?.message}</p>
            ) : (
              ""
            )}
          </FormGroup>
          <GapRow></GapRow>
          <Button
            type="submit"
            kind="primary"
            disabled={isSubmitting}
            className={`${isSubmitting ? "opacity-[0.5]" : ""}`}
          >
            {isSubmitting ? <DotSpinner></DotSpinner> : "Thêm tác giả"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default AuthorAddNew;
