import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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

const GenresAddNew = () => {
  const { control, handleSubmit, setValue } = useForm({ mode: "onSubmit" });
  const [categories, setCategories] = useState([]);
  const [selectCate, setSelectCate] = useState("");
  const navigate = useNavigate();
  const handleAddGenres = async (value) => {
    try {
      const response = await create(value);
      if (response.status === 200) {
        toast(response.data.message);
        navigate("/manage/genres");
      }
    } catch (error) {
      console.log(error);
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
          <Button type="submit" kind="primary">
            Thêm thể loại
          </Button>
        </form>
      </div>
    </>
  );
};

export default GenresAddNew;
