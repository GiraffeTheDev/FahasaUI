import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/button/Button";
import Checkbox from "../components/checkbox/Checkbox";
import ChangeCount from "../components/input/ChangeCount";
import useToggleValue from "../hooks/useToggleValue";
const CartPage = () => {
  const [count, setCount] = useState(0);
  const { control, watch, handleSubmit } = useForm({
    mode: "onSubmit",
  });
  const handleCart = (value) => {
    console.log(value);
  };
  const { value: check, handleToggleValue: handleCheck } = useToggleValue();
  console.log("check", check);
  return (
    <div className="mt-5">
      <h1 className="mb-5 text-xl uppercase">Giỏ hàng ({count} sản phẩm)</h1>
      {count === 0 ? (
        <div className="flex flex-col items-center justify-center w-full px-5 py-5 mt-5 bg-white rounded-lg gap-x-5">
          <img
            src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg"
            alt=""
          />
          <span className="mt-5">Chưa có sản phẩm trong giỏ hàng của bạn</span>
          <Button
            type="button"
            kind={"primary"}
            className="mt-5"
            href={"/flash-sale"}
          >
            Mua sắm ngay
          </Button>
        </div>
      ) : (
        <form action="" onSubmit={handleSubmit(handleCart)}>
          <div className="flex items-start gap-x-5">
            <div className="max-w-[63%] flex-grow">
              <div className="flex items-center justify-between py-2 pl-5 bg-white rounded-lg pr-[100px] ">
                <Checkbox name="all" checked={check} onClick={handleCheck}>
                  Chọn tất cả ({count} sản phẩm)
                </Checkbox>
                <div className="flex items-center justify-between gap-x-10">
                  <div>
                    <span>Số lượng</span>
                  </div>
                  <div>
                    <span>Thành tiền</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between w-full py-5 pl-5 pr-5 mt-5 bg-white rounded-lg">
                <div className="flex items-center ">
                  <Checkbox></Checkbox>
                  <div>
                    <img
                      src="https://cdn0.fahasa.com/media/catalog/product//d/a/damnghilai_bia01.jpg"
                      alt=""
                      className="max-h-[120px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="pb-[70px]">Dám nghĩ lại</span>
                    <div className="flex items-center gap-x-5">
                      <span className="font-semibold">114.000 đ</span>
                      <span className="text-xs line-through text-gray">
                        168.000 đ
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-10">
                  <ChangeCount></ChangeCount>
                  <span className="font-semibold text-primary">114.000 đ</span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 ">
              <div className="bg-white rounded-lg ">
                <div className="flex items-center justify-between px-5 py-3 text-blue1 ">
                  <div className="flex items-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>
                    <span className="uppercase">Khuyến mãi</span>
                  </div>
                  <span>Xem thêm</span>
                </div>
                {Array(4)
                  .fill(0)
                  .map((item) => (
                    <div className="flex flex-col w-full px-5" key={item}>
                      <div className="w-full h-[1px] bg-gray1"></div>
                      <div className="flex flex-col mt-5">
                        <div className="flex items-center justify-between">
                          <span className="">
                            Mã giảm 50% - Đơn hàng từ 500K
                          </span>
                          <span className="underline text-blue1">Chi tiết</span>
                        </div>
                        <h3>
                          Không áp dụng cho phiếu quà tặng, Sách giáo khoa và
                          Giấy Photo
                        </h3>
                        <div className="flex items-center w-full gap-x-10">
                          <div className="flex flex-col w-full py-3 ">
                            <div className="relative h-2 mt-2 text-center bg-blue-200 rounded-full dark:bg-gray-700">
                              <div
                                className="absolute inset-0 h-full bg-blue-500 rounded-full z-5"
                                style={{ width: "10%" }}
                              />
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span>Mua thêm 500.000 đ để nhận mã </span>
                              <span>500.000 đ</span>
                            </div>
                          </div>
                          <Button
                            type="button"
                            kind={"ghost"}
                            className="flex-shrink-0 !px-2 !py-1"
                          >
                            Mua thêm
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="px-5 py-3 mt-5 bg-white rounded-lg max-h-fit">
                <div className="flex items-center justify-between pb-3">
                  <span>Thành tiền</span>
                  <span>0 đ</span>
                </div>
                <div className="w-full h-[1px] bg-gray1"></div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-medium">
                    Tổng số tiền (gồm VAT)
                  </span>
                  <span>0 đ</span>
                </div>
                <Button className="!w-full mt-2" type="submit" kind={"primary"}>
                  Thanh toán
                </Button>
                <p className="mt-2 text-sm text-primary">
                  Giá trên web chỉ áp dụng cho giá bán lẻ
                </p>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default CartPage;
