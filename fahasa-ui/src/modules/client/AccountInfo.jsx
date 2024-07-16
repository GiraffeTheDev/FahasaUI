import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { updateInfor } from "../../api/user";
import Button from "../../components/button/Button";
import GapRow from "../../components/common/GapRow";
import FormRow from "../../components/form/FormRow";
import Input from "../../components/input/Input";
import { Label } from "../../components/label";
const AccountInfo = () => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
  });
  const { user } = useSelector((state) => state.auth);
  const hanldeUpdateInfo = async (value) => {
    try {
      console.log(value);
      const response = await updateInfor({ ...value, id: user.id });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="text-xl uppercase">Thông tin tài khoản</h1>
      {user.name ? (
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full w-[200px] h-[200px]">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://img.lovepik.com/free-png/20211206/lovepik-flat-male-avatar-png-image_401348783_wh1200.png"
              alt=""
            />
          </div>
          <h1 className="mt-1 font-semibold">{user.name}</h1>
        </div>
      ) : (
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
          <Button kind="primary" type="submit">
            Lưu thay đổi
          </Button>
        </form>
      )}
    </>
  );
};

export default AccountInfo;
