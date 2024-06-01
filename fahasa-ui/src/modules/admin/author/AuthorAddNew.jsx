import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { create } from "../../../api/author";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import FormGroup from "../../../components/form/FormGroup";
import ImageUpload from "../../../components/image/ImageUpload";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";
import { useImageUpload } from "../../../hooks/useImageUpload";
const AuthorAddNew = () => {
  const { control, handleSubmit, setValue } = useForm({ mode: "onSubmit" });
  // const dispatch = useDispatch();
  const handleAddAuthor = async (value) => {
    console.log(value);
    try {
      const response = await create(value);
      if (response.status === 200) {
        toast(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { handleSelectImage, image } = useImageUpload(setValue);
  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Thêm danh mục
        </h2>
        <form onSubmit={handleSubmit(handleAddAuthor)}>
          <FormGroup>
            <Label htmlFor="name">Tên Tác giả</Label>
            <Input
              name="name"
              control={control}
              placeholder="Nhập vào tên thể loại"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Ảnh tác giả</Label>
            <ImageUpload onChange={handleSelectImage} url={image}></ImageUpload>
          </FormGroup>
          <GapRow></GapRow>
          <Button type="submit" kind="primary">
            Thêm tác giả
          </Button>
        </form>
      </div>
    </>
  );
};

export default AuthorAddNew;
