import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import * as yup from "yup";
import { createAccount, register, verifyOTP } from "../api/auth";
import Button from "../components/button/Button";
import GapRow from "../components/common/GapRow";
import LargeGap from "../components/common/LargeGap";
import FormGroup from "../components/form/FormGroup";
import Input from "../components/input/Input";
import InputPassword from "../components/input/InputPassword";
import { Label } from "../components/label";
import NavigationBar from "../modules/client/NavigationBar";
import { navi } from "../utils/constant";
const emailSchema = yup.object({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Nhập vào email của bạn"),
});

const otpSchema = yup.object({
  otp: yup.string().required("Nhập vào mã xác nhận của bạn"),
});

const passwordSchema = yup.object({
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/,
      {
        message:
          "Mật khẩu phải có ít nhất 10 kí tự, 1 kí tự viết hoa, 1 kí tự thường , 1 số và 1 kí tự đặc biệt",
      }
    )
    .min(10, "Mật khẩu phải có ít nhất 10 kí tự")
    .required("Hãy nhập vào mật khẩu của bạn"),
});

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const getCurrentSchema = () => {
    switch (step) {
      case 1:
        return emailSchema;
      case 2:
        return otpSchema;
      case 3:
        return passwordSchema;
      default:
        return emailSchema;
    }
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(getCurrentSchema()),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      otp: "",
      password: "",
    },
  });
  const [otpDisabled, setOtpDisabled] = useState(true);
  const [passwordDisabled, setPasswordDisabled] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorOTP, setErrorOTP] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const watchOTP = watch("otp");
  const handleRegister = async (values) => {
    try {
      const response = await register(values);
      if (!response.data.error) {
        Swal.fire({
          title: "Mã OTP đã được gửi tới tài khoản email của bạn",
          icon: "success",
        });
      }
      if (response.data.error !== 1) {
        setStep(2);
        setOtpDisabled(false);
        setErrorMail("");
      } else {
        setErrorMail(response.data.messagemail);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Lỗi",
        icon: "error",
      });
    }
  };
  const handleVerifyOTP = async (values) => {
    try {
      const response = await verifyOTP(values);
      console.log(response);
      if (!response.data.error) {
        setStep(3);
        setButtonDisabled(false);
        setPasswordDisabled(false);
        setErrorOTP("");
      } else {
        setErrorOTP(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCreateAccount = async (values) => {
    try {
      const response = await createAccount(values);
      if (response.data.data) {
        Swal.fire({ title: response.data.message, icon: "success" });
      } else {
        Swal.fire({ title: response.data.message, icon: "error" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (watchOTP && watchOTP.length === 6) {
      handleSubmit(handleVerifyOTP)({ watchOTP });
    }
  }, [watchOTP, handleSubmit]);
  return (
    <div className="w-full py-10 mt-5 bg-white rounded-lg">
      <div className="max-w-[400px] mx-auto">
        <NavigationBar menu={navi} className="max-w-[300px]"></NavigationBar>
        <form
          onSubmit={handleSubmit(
            step === 1
              ? handleRegister
              : step === 3
              ? handleCreateAccount
              : () => {}
          )}
          autoComplete="off"
        >
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input control={control} name={"email"} placeholder="Nhập email">
              <Button type="submit">Gửi OTP</Button>
            </Input>
            {errors?.email || errorMail ? (
              <p className="text-sm text-red-500">
                {errors?.email?.message || errorMail}
              </p>
            ) : (
              ""
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="otp">Mã xác nhận OTP</Label>
            <Input
              control={control}
              name={"otp"}
              placeholder={"6 kí tự"}
              maxLength={6}
              disabled={otpDisabled}
              className={`${otpDisabled ? "!bg-gray" : ""} `}
            ></Input>
            {errors?.otp || errorOTP ? (
              <p className="text-sm text-red-500">
                {errors?.otp?.message || errorOTP}
              </p>
            ) : (
              ""
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Mật khẩu</Label>
            <InputPassword
              name={"password"}
              disabled={passwordDisabled}
              control={control}
              className={`${passwordDisabled ? "!bg-gray" : ""} `}
            ></InputPassword>
            {step === 3 && errors?.password && (
              <p className="text-sm text-red-500">
                {errors?.password?.message}
              </p>
            )}
          </FormGroup>
          <GapRow></GapRow>
          <Button
            type="submit"
            kind={"primary"}
            className={`w-full ${buttonDisabled ? "opacity-[0.5]" : ""}`}
            disabled={buttonDisabled}
          >
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
