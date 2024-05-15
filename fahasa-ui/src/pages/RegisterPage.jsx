import React from "react";
import { useForm } from "react-hook-form";
import Button from "../components/button/Button";
import GapRow from "../components/common/GapRow";
import LargeGap from "../components/common/LargeGap";
import FormGroup from "../components/form/FormGroup";
import Input from "../components/input/Input";
import { Label } from "../components/label";
import NavigationBar from "../modules/client/NavigationBar";

const RegisterPage = () => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
  });
  const handleRegister = (values) => {
    console.log("value", values);
  };
  return (
    <div className="w-full py-10 mt-5 bg-white rounded-lg">
      <div className="max-w-[400px] mx-auto">
        <NavigationBar></NavigationBar>
        <form onSubmit={handleSubmit(handleRegister)} autoComplete="off">
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              control={control}
              name={"email"}
              placeholder="Nhập email"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="otp">Mã xác nhận OTP</Label>
            <Input
              control={control}
              name={"otp"}
              placeholder={"6 kí tự"}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Mật khẩu</Label>
            <Input
              control={control}
              name={"password"}
              placeholder={"Nhập mật khẩu"}
            ></Input>
          </FormGroup>
          <GapRow></GapRow>
          <Button type="submit" kind={"primary"} className="w-full">
            Đăng kí
          </Button>
          <LargeGap></LargeGap>
          <div className="flex justify-center">
            <p className="text-xs max-w-[300px] text-center leading-5">
              Bằng việc đăng kí bạn đã đồng ý với Fahasa.com về{" "}
              <span className="text-blue1">Điều khoản dịch vụ</span> &{" "}
              <span className="text-blue1">Chính sách bảo mật</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
