import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";
import Heading from "../Heading";

const GenresAddNew = () => {
  const { control, handleSubmit } = useForm({ mode: "onSubmit" });
  const handleAddGenres = (value) => {
    console.log(value);
  };
  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <Heading title="Thêm thể loại"></Heading>
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
