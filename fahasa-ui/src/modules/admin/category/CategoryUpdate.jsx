import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getOne } from "../../../api/category";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import FormGroup from "../../../components/form/FormGroup";
import ImageUpload from "../../../components/image/ImageUpload";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";
import { useImageUpload } from "../../../hooks/useImageUpload";
import { handleUpdateCategory } from "../../../redux/category/handlers";
const CategoryUpdate = () => {
  const { control, handleSubmit, setValue, reset } = useForm({
    mode: "onSubmit",
  });
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const id = params.get("id");
  const navigate = useNavigate();
  const updateCategory = (value) => {
    console.log(value);
    try {
      dispatch(handleUpdateCategory(value));
      navigate("/manage/category");
    } catch (error) {
      console.log(error);
    }
  };
  const { handleSelectImage, image } = useImageUpload(setValue);
  useEffect(() => {
    const fetch = async () => {
      const response = await getOne(id);
      reset(response.data.data);
      setUrl(response.data.data.image);
    };
    fetch();
  }, [id, reset]);

  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Thêm danh mục
        </h2>
        <form onSubmit={handleSubmit(updateCategory)}>
          <FormGroup>
            <Label htmlFor="name">Tên danh mục</Label>
            <Input
              name="name"
              control={control}
              placeholder="Nhập vào tên thể loại"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Ảnh danh mục</Label>
            <ImageUpload
              onChange={handleSelectImage}
              url={image ? image : url}
            ></ImageUpload>
          </FormGroup>
          <GapRow></GapRow>
          <div className="flex items-center gap-x-5">
            <Button type="submit" kind="primary">
              Cập nhật danh mục
            </Button>
            <Button type="submit" kind="semi" href="/manage/category">
              Quay lại
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CategoryUpdate;
