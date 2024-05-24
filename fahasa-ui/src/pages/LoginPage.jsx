import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import GapRow from "../components/common/GapRow";
import FormGroup from "../components/form/FormGroup";
import Input from "../components/input/Input";
import { Label } from "../components/label";
import NavigationBar from "../modules/client/NavigationBar";

const LoginPage = () => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
  });
  const handleLogin = (values) => {
    console.log("value", values);
  };
  return (
    <div className="w-full py-10 mt-5 bg-white rounded-lg">
      <div className="max-w-[400px] mx-auto">
        <NavigationBar></NavigationBar>
        <form onSubmit={handleSubmit(handleLogin)} autoComplete="off">
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              control={control}
              name={"email"}
              placeholder={"Nhập email"}
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
          <div className="flex items-center justify-end">
            <Link to={"/forget-password"} className="text-right text-primary">
              Quên mật khẩu
            </Link>
          </div>
          <GapRow></GapRow>
          <Button type="submit" kind={"primary"} className="w-full">
            Đăng nhập
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
