import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/button/Button";
import Checkbox from "../components/checkbox/Checkbox";
import ChangeCount from "../components/input/ChangeCount";
import useToggleValue from "../hooks/useToggleValue";
const CartPage = () => {
  const [count, setCount] = useState(1);
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
      <h1 className="text-xl uppercase">Giỏ hàng ({count} sản phẩm)</h1>
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
          <div className="flex items-center gap-x-5">
            <div className="flex-[50%]">
              <div className="flex items-center justify-between py-2 pl-5 bg-white rounded-lg pr-[100px] mt-5">
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
            <div className="flex-1 bg-white rounded-lg">30%</div>
          </div>
        </form>
      )}
    </div>
  );
};

export default CartPage;
