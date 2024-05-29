import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Button from "../components/button/Button";
import GapRow from "../components/common/GapRow";
import FormGroup from "../components/form/FormGroup";
import Input from "../components/input/Input";
import InputPassword from "../components/input/InputPassword";
import { Label } from "../components/label";
import NavigationBar from "../modules/client/NavigationBar";
import { handleLoginRedux } from "../redux/auth/handlers";
import { navi } from "../utils/constant";

const LoginPage = () => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogin = async (values) => {
    try {
      dispatch(handleLoginRedux(values));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user && user.isAdmin === false) {
      navigate("/");
    } else if (user && user.isAdmin === true) {
      navigate("/dashboard");
    }
  }, [dispatch, user, navigate]);
  return (
    <div className="w-full py-10 mt-5 bg-white rounded-lg">
      <div className="max-w-[400px] mx-auto">
        <NavigationBar menu={navi} className="max-w-[300px]"></NavigationBar>
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
            <InputPassword name="password" control={control}></InputPassword>
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
