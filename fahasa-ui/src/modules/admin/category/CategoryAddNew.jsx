import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as yup from "yup";
import { create } from "../../../api/category";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import DropDown from "../../../components/dropdown/DropDown";
import List from "../../../components/dropdown/List";
import Options from "../../../components/dropdown/Options";
import Select from "../../../components/dropdown/Select";
import FormGroup from "../../../components/form/FormGroup";
import ImageUpload from "../../../components/image/ImageUpload";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";
import DotSpinner from "../../../components/loading/DotSpinner";
import { useImageUpload } from "../../../hooks/useImageUpload";
const types = [
  { id: 1, name: "VI" },
  {
    id: 2,
    name: "EN",
  },
];

const schema = yup.object({
  name: yup.string().required("Nhập vào tên danh mục"),
  image: yup.string().required("Chọn hình ảnh danh mục"),
  type: yup.string().required("Nhập vào kiểu danh mục"),
});
const CategoryAddNew = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [select, setSelect] = useState("");
  const handleSelectType = (item) => {
    setValue("type", item);
    setSelect(item);
  };
  const navigate = useNavigate();
  const handleAddGenres = async (value) => {
    setIsSubmitting(true);
    try {
      const response = await create(value);
      if (!response.data.error) {
        setIsSubmitting(false);
        Swal.fire({
          title: "Thêm mới thành công",
          icon: "success",
        });
        navigate("/manage/category");
      }
    } catch (error) {
      setIsSubmitting(false);
      Swal.fire({
        title: "Thêm mới thất bại",
        icon: "error",
      });
    }
  };
  const { handleSelectImage, image } = useImageUpload(setValue);
  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Thêm danh mục
        </h2>
        <form onSubmit={handleSubmit(handleAddGenres)}>
          <FormGroup>
            <Label htmlFor="name">Tên danh mục</Label>
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
            <Label htmlFor="name">Ảnh danh mục</Label>
            <ImageUpload onChange={handleSelectImage} url={image}></ImageUpload>
            {errors?.image ? (
              <p className="text-sm text-red-500">{errors?.image?.message}</p>
            ) : (
              ""
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="type">Kiểu mục</Label>
            <DropDown>
              <Select placeholder={select ? select : "Kiểu"}></Select>
              <List>
                {types.length > 0 &&
                  types.map((item) => (
                    <Options
                      key={item.id}
                      onClick={() => handleSelectType(item.name)}
                    >
                      {item.name}
                    </Options>
                  ))}
              </List>
            </DropDown>
            {errors?.type ? (
              <p className="text-sm text-red-500">{errors?.type?.message}</p>
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
            {isSubmitting ? <DotSpinner></DotSpinner> : "Thêm danh mục"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default CategoryAddNew;
