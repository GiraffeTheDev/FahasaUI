import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/button/Button";
import Checkbox from "../components/checkbox/Checkbox";
import GapRow from "../components/common/GapRow";
import FormRow from "../components/form/FormRow";
import Input from "../components/input/Input";
import { Label } from "../components/label";
import Radio from "../components/radio/Radio";
const CheckoutPage = () => {
  const { control, handleSubmit, watch, setValue } = useForm({
    mode: "onSubmit",
  });
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const provinceId = watch("province");
  const districtId = watch("district");

  // Fetch provinces when component mounts
  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/?depth=1")
      .then((response) => response.json())
      .then((data) => setProvinces(data));
  }, []);

  // Fetch districts when provinceId changes
  useEffect(() => {
    if (provinceId) {
      fetch(`https://provinces.open-api.vn/api/p/${provinceId}?depth=2`)
        .then((response) => response.json())
        .then((data) => {
          setDistricts(data.districts);
          setValue("district", "");
          setWards([]);
          setValue("ward", "");
        });
    } else {
      setDistricts([]);
      setValue("district", "");
      setWards([]);
      setValue("ward", "");
    }
  }, [provinceId, setValue]);

  // Fetch wards when districtId changes
  useEffect(() => {
    if (districtId) {
      fetch(`https://provinces.open-api.vn/api/d/${districtId}?depth=2`)
        .then((response) => response.json())
        .then((data) => {
          setWards(data.wards);
          setValue("ward", "");
        });
    } else {
      setWards([]);
      setValue("ward", "");
    }
  }, [districtId, setValue]);

  const handleCheckout = (value) => {
    console.log(value);
  };
  const payment = watch("payment_method");
  return (
    <div className="mt-5 ">
      <div className="px-5 py-5 bg-white rounded-lg">
        <h1 className="mb-5 text-2xl font-base">Địa chỉ giao hàng</h1>
        <form onSubmit={handleSubmit(handleCheckout)}>
          <FormRow>
            <div className="w-[150px]">
              <Label htmlFor="name">Họ và tên người nhận</Label>
            </div>
            <div className="flex-1">
              <Input
                control={control}
                name={"name"}
                placeholder={"Nhập họ và tên người nhận"}
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
                placeholder={"VD : 0342.883.xxx"}
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
                placeholder={"Chọn tỉnh/thành phố"}
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
                placeholder={"Chọn quận/huyện"}
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
                placeholder={"Chọn phường/xã"}
              ></Input>
            </div>
          </FormRow>
          <GapRow></GapRow>
          <FormRow>
            <div className="w-[150px]">
              <Label htmlFor="address">Địa chỉ nhận hàng</Label>
            </div>
            <div className="flex-1">
              <Input
                control={control}
                name={"address"}
                placeholder={"Nhập địa chỉ nhận hàng"}
              ></Input>
            </div>
          </FormRow>
          <GapRow></GapRow>
        </form>
      </div>
      <div className="px-5 py-5 mt-5 bg-white rounded-lg">
        <h1 className="text-2xl font-base">Địa chỉ giao hàng</h1>
        <p className="mt-5">
          Quý khách vui lòng điền tên và địa chỉ giao nhận trước
        </p>
      </div>
      <div className="px-5 py-5 mt-5 bg-white rounded-lg">
        <h1 className="text-2xl font-base">Phương thức thanh toán</h1>
        <div className="flex flex-col gap-x-5">
          <Radio
            control={control}
            name={"payment_method"}
            checked={payment === "banking"}
            value={"banking"}
          >
            <img
              src="https://vnpay.vn/s1/statics.vnpay.vn/2023/6/0oxhzjmxbksr1686814746087.png"
              alt=""
              className="w-[50px] h-[50px]"
            />{" "}
            Thanh toán bằng VNPay
          </Radio>
          <Radio
            control={control}
            name={"payment_method"}
            checked={payment === "cash"}
            value={"cash"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[50px] h-[40px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>
            Thanh toán bằng tiền mặt khi nhận hàng
          </Radio>
        </div>
      </div>
      <div className="p-5 mt-5 bg-white rounded-lg">
        <h1 className="text-2xl font-base">Kiểm tra lại đơn hàng</h1>
        <div className="flex flex-col px-5">
          {Array(4)
            .fill(0)
            .map((item) => (
              <div className="mt-5" key={uuidv4()}>
                <div className="w-full h-[1px] mb-5 bg-black"></div>
                <div className="flex items-start">
                  <div className="w-[145px]">
                    <img
                      src="https://cdn0.fahasa.com/media/catalog/product//i/m/img_7566.jpg"
                      className=" object-cover max-h-[145px]"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 gap-x-4">
                    <div className="w-[700px]">
                      English Vocabulary in Use: Elementary Book with Answers
                      Fahasa Reprint Edition: Vocabulary Reference and Practice
                      (CD-ROM)
                    </div>
                    <div className="flex flex-1 gap-x-[60px]">
                      <div className="flex flex-col">
                        <span>127.300</span>
                        <span className="text-sm line-through text-gray2">
                          134.000
                        </span>
                      </div>
                      <span>1</span>
                      <span className=" text-yellow1">127.0000</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="p-5 mt-5 bg-white rounded-lg">
        <div className="flex items-center justify-end">
          <div className="flex flex-col items-center gap-y-5">
            <span>Thành tiền : 369.000 đ</span>
            <span>
              Tổng số tiền (gồm VAT) :{" "}
              <span className="text-yellow1">369.000 đ</span>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-x-2">
            <Checkbox checked={true}></Checkbox>
            <div className="flex flex-col">
              <span>Bằng việc tiến hành mua hàng bạn đã đồng ý với</span>
              <span className="text-blue-500">
                Điều khoản & Điều kiện của Fahasa.com
              </span>
            </div>
          </div>
          <Button
            type="submit"
            kind={"primary"}
            className="!px-10 !font-semibold"
          >
            Xác nhận thanh toán
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
