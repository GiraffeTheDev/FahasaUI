import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import GapRow from "../../components/common/GapRow";
import FormRow from "../../components/form/FormRow";
import Input from "../../components/input/Input";
import { Label } from "../../components/label";

const AccountAddress = () => {
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
        <div className="flex items-start gap-x-5">
          <div>
            <h1 className="mb-5 text-xl uppercase">Thông tin liên hệ</h1>
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
          </div>
          <div>
            <h1 className="mb-5 text-xl uppercase">Địa chỉ</h1>
            <FormRow>
              <div className="flex-1">
                <Input
                  control={control}
                  name={"name"}
                  placeholder={"Địa chỉ"}
                ></Input>
              </div>
            </FormRow>
            <GapRow></GapRow>
            <FormRow>
              <div className="w-[150px]">
                <Label htmlFor="province">Tỉnh/Thành phố</Label>
              </div>
              <div className="flex-1">
                <Input
                  control={control}
                  name={"province"}
                  placeholder={"Tỉnh/Thành phố"}
                ></Input>
              </div>
            </FormRow>
            <GapRow></GapRow>
            <FormRow>
              <div className="w-[150px]">
                <Label htmlFor="district">Quận/Huyện</Label>
              </div>
              <div className="flex-1">
                <Input
                  control={control}
                  name={"district"}
                  placeholder={"Quận/Huyện"}
                ></Input>
              </div>
            </FormRow>
            <GapRow></GapRow>
            <FormRow>
              <div className="w-[150px]">
                <Label htmlFor="ward">Phường/Xã</Label>
              </div>
              <div className="flex-1">
                <Input
                  control={control}
                  name={"ward"}
                  placeholder={"Phường/Xã"}
                ></Input>
              </div>
            </FormRow>
            <GapRow></GapRow>
          </div>
        </div>
        <Button kind="primary" type="submit">
          Lưu địa chỉ
        </Button>
      </form>
    </>
  );
};

export default AccountAddress;
