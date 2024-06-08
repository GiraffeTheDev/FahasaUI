import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllCategory } from "../../../api/category";
import { getOne, update } from "../../../api/genres";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import DropDown from "../../../components/dropdown/DropDown";
import List from "../../../components/dropdown/List";
import Options from "../../../components/dropdown/Options";
import Select from "../../../components/dropdown/Select";
import FormGroup from "../../../components/form/FormGroup";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";

const GenresUpdate = () => {
  const { control, handleSubmit, reset, setValue } = useForm({
    mode: "onSubmit",
  });
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [selectCate, setSelectCate] = useState("");
  const handleUpdateGenres = async (value) => {
    try {
      const response = await update(value);
      if (response.status === 200) {
        toast(response.data.message);
        navigate("/manage/genres");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [params] = useSearchParams();
  const id = params.get("id");
  useEffect(() => {
    const fetch = async () => {
      const response = await getOne(id);
      console.log(response);
      reset(response.data.data);
      setSelectCate(
        response.data.data
          ? response.data.data.CategoryGenres?.name
          : response.data.data.CategoryGenres.name
      );
    };
    fetch();
  }, [id, reset]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getAllCategory();
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
    <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Cập nhật thể loại
      </h2>
      <form onSubmit={handleSubmit(handleUpdateGenres)}>
        <Label htmlFor="name">Tên thể loại</Label>
        <Input
          name="name"
          control={control}
          placeholder="Nhập vào tên thể loại"
        ></Input>
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
        </FormGroup>
        <GapRow></GapRow>
        <div className="flex items-center gap-x-5">
          <Button type="submit" kind="primary">
            Thay đổi
          </Button>
          <Button type="submit" kind="semi" href="/manage/genres">
            Quay lại
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GenresUpdate;
