import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import GapRow from "../../components/common/GapRow";
import FormRow from "../../components/form/FormRow";
import Input from "../../components/input/Input";
import { Label } from "../../components/label";
import Radio from "../../components/radio/Radio";

const AccountInfo = () => {
  const { control, handleSubmit, watch } = useForm({
    mode: "onSubmit",
  });
  const hanldeUpdateInfo = (value) => {
    console.log(value);
  };
  const gender = watch("gender");
  return (
    <>
      <h1 className="text-xl uppercase">Thông tin tài khoản</h1>
      <form
        action=""
        onSubmit={handleSubmit(hanldeUpdateInfo)}
        className="mt-5"
      >
        <FormRow>
          <div className="w-[150px]">
            <Label htmlFor="name">Họ và tên</Label>
          </div>
          <div className="flex-1">
            <Input
              control={control}
              name={"name"}
              placeholder={"Nhập họ và tên "}
            ></Input>
          </div>
        </FormRow>
        <GapRow></GapRow>
        <FormRow>
          <div className="w-[150px]">
            <Label htmlFor="phone">Số điện thoại</Label>
          </div>
          <div className="flex-1">
            <Input
              control={control}
              name={"phone"}
              placeholder={"Nhập số điện thoại "}
            ></Input>
          </div>
        </FormRow>
        <GapRow></GapRow>
        <FormRow>
          <div className="w-[150px]">
            <Label htmlFor="email">Email</Label>
          </div>
          <div className="flex-1">
            <Input
              control={control}
              name={"email"}
              placeholder={"Nhập email "}
            ></Input>
          </div>
        </FormRow>
        <GapRow></GapRow>
        <FormRow>
          <Radio
            control={control}
            name={"gender"}
            checked={gender === "male"}
            value={"male"}
          >
            Nam
          </Radio>
          <Radio
            control={control}
            name={"gender"}
            checked={gender === "female"}
            value={"female"}
          >
            Nữ
          </Radio>
        </FormRow>
        <GapRow></GapRow>
        <Button kind="primary" type="submit">
          Lưu thay đổi
        </Button>
      </form>
    </>
  );
};

export default AccountInfo;
