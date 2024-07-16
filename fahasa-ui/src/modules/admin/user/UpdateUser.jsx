import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getOne, updateRole } from "../../../api/user";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import FormGroup from "../../../components/form/FormGroup";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";
import Radio from "../../../components/radio/Radio";

const UpdateUser = () => {
  const { control, handleSubmit, reset, watch } = useForm({
    mode: "onSubmit",
  });
  const [params] = useSearchParams();
  const id = params.get("id");
  const watchRole = watch("isAdmin");
  useEffect(() => {
    const fetch = async () => {
      const response = await getOne(id);
      console.log(response);
      if (!response.data.error) {
        reset(response.data.data);
      }
    };
    fetch();
  }, [id, reset]);
  const handleUpdateRole = async (value) => {
    console.log(value);
    try {
      const response = await updateRole({
        id: value.id,
        isAdmin: value.isAdmin,
      });
      toast(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Cập nhật nhà cung cấp
        </h2>
        <form onSubmit={handleSubmit(handleUpdateRole)}>
          <FormGroup>
            <Label htmlFor="name">Tên người dùng</Label>
            <Input
              name="name"
              control={control}
              placeholder="Nhập vào tên thể loại"
              disabled={true}
              className={`opacity-[0.5] select-none `}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Email</Label>
            <Input
              name="email"
              control={control}
              placeholder="Nhập vào tên thể loại"
              disabled={true}
              className={`opacity-[0.5] select-none`}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Vai trò</Label>
            <div className="flex items-center gap-x-5">
              <Radio
                className="!items-start"
                control={control}
                name={"isAdmin"}
                checked={parseInt(watchRole) === parseInt(1)}
                value={parseInt(1)}
              >
                <span className="text-sm">Người quản trị</span>
              </Radio>
              <Radio
                className="!items-start"
                control={control}
                name={"isAdmin"}
                checked={parseInt(watchRole) === parseInt(0)}
                value={parseInt(0)}
              >
                <span className="text-sm">Người dùng</span>
              </Radio>
            </div>
          </FormGroup>
          <GapRow></GapRow>
          <div className="flex items-center gap-x-5">
            <Button type="submit" kind="primary">
              Cập nhật vai trò cua người dùng
            </Button>
            <Button type="submit" kind="semi" href="/manage/users">
              Quay lại
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateUser;
