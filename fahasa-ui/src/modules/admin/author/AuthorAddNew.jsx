import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
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
  const navigate = useNavigate();
  const handleAddAuthor = async (value) => {
    try {
      const response = await create(value);
      if (response.status === 200) {
        navigate("/manage/author");
        Swal.fire({
          title: "Thêm mới thành công",
          icon: "success",
        });
      }
    } catch (error) {
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
