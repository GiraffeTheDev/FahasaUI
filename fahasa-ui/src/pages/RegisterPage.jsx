import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
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

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const { control, handleSubmit, watch } = useForm({
    mode: "onSubmit",
  });
  const [otpDisabled, setOtpDisabled] = useState(true);
  const [passwordDisabled, setPasswordDisabled] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const watchOTP = watch("otp");
  const handleRegister = async (values) => {
    try {
      const response = await register(values);
      toast(response.data.message);
      if (response.data.error !== 1) {
        setStep(2);
        setOtpDisabled(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleVerifyOTP = async (values) => {
    try {
      await verifyOTP(values);
      setStep(3);
      setButtonDisabled(false);
      setPasswordDisabled(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCreateAccount = async (values) => {
    try {
      const response = await createAccount(values);
      if (response.data.data) {
        toast(response.data.message);
      } else {
        toast("Register Failed");
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
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Mật khẩu</Label>
            <InputPassword
              name={"password"}
              disabled={passwordDisabled}
              control={control}
              className={`${passwordDisabled ? "!bg-gray" : ""} `}
            ></InputPassword>
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
