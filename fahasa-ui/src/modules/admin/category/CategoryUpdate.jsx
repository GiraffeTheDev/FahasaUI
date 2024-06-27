import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getOne, updateCategory } from "../../../api/category";
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
import { useImageUpload } from "../../../hooks/useImageUpload";
const types = [
  { id: 1, name: "VI" },
  {
    id: 2,
    name: "EN",
  },
];
const CategoryUpdate = () => {
  const { control, handleSubmit, setValue, reset } = useForm({
    mode: "onSubmit",
  });
  const [url, setUrl] = useState("");
  const [select, setSelect] = useState("");
  const [params] = useSearchParams();
  const id = params.get("id");
  const navigate = useNavigate();
  const updateCategoryFn = async (value) => {
    try {
      const response = await updateCategory(value);
      if (!response.data.error) {
        Swal.fire({
          title: "Cập nhật thành công",
          icon: "success",
        });
        navigate("/manage/category");
      }
    } catch (error) {
      Swal.fire({
        title: "Cập nhật thất bại",
        icon: "error",
      });
    }
  };
  const { handleSelectImage, image } = useImageUpload(setValue);
  useEffect(() => {
    const fetch = async () => {
      const response = await getOne(id);
      reset(response.data.data);
      setUrl(response.data.data.image);
      setSelect(response.data.data.type);
    };
    fetch();
  }, [id, reset]);
  const handleSelectType = (item) => {
    setValue("type", item);
    setSelect(item);
  };
  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Thêm danh mục
        </h2>
        <form onSubmit={handleSubmit(updateCategoryFn)}>
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
