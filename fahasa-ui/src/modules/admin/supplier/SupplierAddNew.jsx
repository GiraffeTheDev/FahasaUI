import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as yup from "yup";
import { create } from "../../../api/supplier";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import FormGroup from "../../../components/form/FormGroup";
import ImageUpload from "../../../components/image/ImageUpload";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";
import DotSpinner from "../../../components/loading/DotSpinner";
import Radio from "../../../components/radio/Radio";
import { useImageUpload } from "../../../hooks/useImageUpload";
const schema = yup.object({
  name: yup.string().required("Nhập vào tên nhà cung cấp"),
  image: yup.string().required("Chọn ảnh nhà cung cấp"),
  original: yup.string().required("Chọn xuất xứ"),
});
const SupplierAddNew = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleAddSupplier = async (value) => {
    setIsSubmitting(true);
    try {
      const response = await create(value);
      if (!response.data.error) {
        setIsSubmitting(false);
        Swal.fire({
          title: "Thêm mới thành công",
          icon: "success",
        });
        navigate("/manage/supplier");
      }
    } catch (error) {
      setIsSubmitting(false);
      Swal.fire({
        title: "Thêm mới thất bại",
        icon: "success",
      });
    }
  };
  const { handleSelectImage, image } = useImageUpload(setValue);
  const watchOri = watch("original");
  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Thêm nhà cung cấp
        </h2>
        <form onSubmit={handleSubmit(handleAddSupplier)}>
          <FormGroup>
            <Label htmlFor="name">Tên Nhà cung cấp</Label>
            <Input
              name="name"
              control={control}
              placeholder="Nhập vào tên nhà cung cấp"
            ></Input>
            {errors?.name ? (
              <p className="text-sm text-red-500">{errors?.name?.message}</p>
            ) : (
              ""
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Ảnh nhà cung cấp</Label>
            <ImageUpload onChange={handleSelectImage} url={image}></ImageUpload>
            {errors?.image ? (
              <p className="text-sm text-red-500">{errors?.image?.message}</p>
            ) : (
              ""
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Xuất xứ</Label>
            <div className="flex items-center gap-x-5">
              <Radio
                className="!items-start"
                control={control}
                name={"original"}
                checked={watchOri === "Domestic"}
                value={"Domestic"}
              >
                <span className="text-sm">Domestic</span>
              </Radio>
              <Radio
                className="!items-start"
                control={control}
                name={"original"}
                checked={watchOri === "Foreign"}
                value={"Foreign"}
              >
                <span className="text-sm">Foreign</span>
              </Radio>
            </div>
            {errors?.original ? (
              <p className="text-sm text-red-500">
                {errors?.original?.message}
              </p>
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
            {isSubmitting ? <DotSpinner></DotSpinner> : "Thêm nhà cung cấp"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default SupplierAddNew;
