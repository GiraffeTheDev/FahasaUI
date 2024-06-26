import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getOne, update } from "../../../api/publisher";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";

const UpdatePublisher = () => {
  const { control, handleSubmit, reset } = useForm({
    mode: "onSubmit",
  });
  const navigate = useNavigate();

  const handleUpdatePublisher = async (value) => {
    try {
      const response = await update(value);
      if (response.status === 200) {
        Swal.fire({
          title: "Cập nhật thành công",
          icon: "success",
        });
        navigate("/manage/Publisher");
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

      reset(response.data.data);
    };
    fetch();
  }, [id, reset]);

  return (
    <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Cập nhật nhà xuất bản
      </h2>
      <form onSubmit={handleSubmit(handleUpdatePublisher)} autoComplete="off">
        <Label htmlFor="name">Tên nhà xuất bản</Label>
        <Input
          name="name"
          control={control}
          placeholder="Nhập vào tên nhà xuất bản"
        ></Input>

        <GapRow></GapRow>
        <div className="flex items-center gap-x-5">
          <Button type="submit" kind="primary">
            Thay đổi
          </Button>
          <Button type="submit" kind="semi" href="/manage/Publisher">
            Quay lại
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePublisher;
