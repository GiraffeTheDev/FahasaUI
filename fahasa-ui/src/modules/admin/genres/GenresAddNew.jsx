import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as yup from "yup";
import { getAllCategory } from "../../../api/category";
import { create } from "../../../api/genres";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import DropDown from "../../../components/dropdown/DropDown";
import List from "../../../components/dropdown/List";
import Options from "../../../components/dropdown/Options";
import Select from "../../../components/dropdown/Select";
import FormGroup from "../../../components/form/FormGroup";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";
import DotSpinner from "../../../components/loading/DotSpinner";
const schema = yup.object({
  name: yup.string().required("Nhập vào tên thể loại"),
  category_id: yup.string().required("Chọn tên danh mục danh mục"),
});
const GenresAddNew = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const [categories, setCategories] = useState([]);
  const [selectCate, setSelectCate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
        navigate("/manage/genres");
      }
    } catch (error) {
      setIsSubmitting(false);
      Swal.fire({
        title: "Thêm mới thất bại",
        icon: "error",
      });
    }
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getAllCategory();
        console.log(response);
        setCategories(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  const handleSelectCategory = (item) => {
    setValue("category_id", item.id);
    setSelectCate(item.name);
  };
  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Thêm thể loại
        </h2>
        <form onSubmit={handleSubmit(handleAddGenres)}>
          <FormGroup>
            <Label htmlFor="name">Tên thể loại</Label>
            <Input
              name="name"
              control={control}
              placeholder="Nhập vào tên thể loại"
            ></Input>
            {errors?.name ? (
              <p className="mt-1 text-sm text-red-500">
                {errors?.name?.message}
              </p>
            ) : (
              ""
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="author">Danh mục</Label>
            <DropDown>
              <Select
                placeholder={`${selectCate ? selectCate : "Danh mục"}`}
              ></Select>
              <List>
                {categories.length > 0 &&
                  categories.map((item) => (
                    <Options
                      key={item.id}
                      onClick={() => handleSelectCategory(item)}
                    >
                      {item.name}
                    </Options>
                  ))}
              </List>
            </DropDown>
            {errors?.category_id ? (
              <p className="mt-1 text-sm text-red-500">
                {errors?.category_id?.message}
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
            {isSubmitting ? <DotSpinner></DotSpinner> : "Thêm thể loại"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default GenresAddNew;
