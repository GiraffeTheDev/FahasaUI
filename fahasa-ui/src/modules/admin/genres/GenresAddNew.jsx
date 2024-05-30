import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";

const GenresAddNew = () => {
  const { control, handleSubmit } = useForm({ mode: "onSubmit" });
  const handleAddGenres = (value) => {
    console.log(value);
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