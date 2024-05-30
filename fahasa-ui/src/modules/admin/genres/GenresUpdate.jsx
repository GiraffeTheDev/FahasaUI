import React from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";

const GenresUpdate = () => {
  const { control, handleSubmit, reset } = useForm({ mode: "onSubmit" });
  const handleUpdateGenres = (value) => {
    console.log(value);
  };
  const [params] = useSearchParams();
  const id = params.get("id");

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
