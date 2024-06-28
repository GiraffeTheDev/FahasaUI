import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Button from "../components/button/Button";
import GapRow from "../components/common/GapRow";
import FormGroup from "../components/form/FormGroup";
import Input from "../components/input/Input";
import InputPassword from "../components/input/InputPassword";
import { Label } from "../components/label";
import DotSpinner from "../components/loading/DotSpinner";
import NavigationBar from "../modules/client/NavigationBar";
import { handleLoginRedux } from "../redux/auth/handlers";
import { navi } from "../utils/constant";
const schema = yup.object({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Nhập vào email của bạn"),
  password: yup.string().required("Hãy nhập vào mật khẩu của bạn"),
});
const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const handleLogin = async (values) => {
    setIsSubmitting(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          dispatch(handleLoginRedux(values));
          setIsSubmitting(false);
        } catch (error) {
          console.log(error);
          setIsSubmitting(false);
        }
      }, 1000);
    });
  };
  useEffect(() => {
    if (user && user.isAdmin === 0) {
      navigate("/");
    } else if (user && user.isAdmin === 1) {
      navigate("/dashboard");
    }
  }, [dispatch, user, navigate]);
  useEffect(() => {
    if (errors?.length > 0) {
      setIsSubmitting(false);
    }
  }, [errors]);
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
              placeholder={"Nhập địa chỉ email của bạn"}
            ></Input>
            {errors?.email ? (
              <p className="text-sm text-red-500">{errors?.email?.message}</p>
            ) : (
              ""
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Mật khẩu</Label>
            <InputPassword name="password" control={control}></InputPassword>
            {errors?.password ? (
              <p className="text-sm text-red-500">
                {errors?.password?.message}
              </p>
            ) : (
              ""
            )}
          </FormGroup>
          <div className="flex items-center justify-end">
            <Link to={"/forget-password"} className="text-right text-primary">
              Quên mật khẩu
            </Link>
          </div>
          <GapRow></GapRow>
          <Button
            type="submit"
            kind={"primary"}
            className={`w-full ${isSubmitting ? "opacity-[0.5]" : ""}`}
            disabled={isSubmitting || isSubmitted}
          >
            {isSubmitting ? <DotSpinner></DotSpinner> : "Đăng nhập"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
