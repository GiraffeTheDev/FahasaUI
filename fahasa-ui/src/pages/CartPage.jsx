import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../components/button/Button";
import Checkbox from "../components/checkbox/Checkbox";
import useToggleValue from "../hooks/useToggleValue";
import {
  decreaseItem,
  increaseItem,
  removeItemFromCart,
} from "../redux/cart/slice";
import { formatNumber } from "../utils/function";
const CartPage = () => {
  const { watch, control, handleSubmit } = useForm({
    mode: "onSubmit",
  });
  const { items } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeItemFromCart({ id }));
    Swal.fire({
      title: "Xóa sản phẩm khỏi giỏ hàng thành công",
      icon: "success",
    });
  };

  const handleIncrease = (id) => {
    dispatch(increaseItem({ id }));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseItem({ id }));
  };
  const { value: check, handleToggleValue: handleCheck } = useToggleValue();
  const total = items.reduce(
    (sum, item) =>
      sum + (item.price - (item.price * item.discount) / 100) * item.quantity,
    0
  );
  const shippingFee = 32000; // Example shipping fee
  const totalPrice = total + shippingFee;
  return (
    <div className="relative mt-5">
      <h1 className="mb-2 text-xl uppercase lg:mb-5">
        Giỏ hàng ({items.length} sản phẩm)
      </h1>
      <div className="fixed bottom-0 z-50 flex items-center justify-center w-full shadow-lg md:shadow-none lg:hidden">
        <div className="px-5 flex items-center justify-between w-full md:w-[70%] py-5 mx-auto bg-white shadow-xl">
          <div className="flex flex-col justify-between">
            <span>Tổng cộng</span>
            <span className="text-2xl font-semibold text-primary">
              {formatNumber(totalPrice)} đ
            </span>
          </div>

          <Button
            className={`max-w-[150px] mt-2 ${!user ? "opacity-[0.5]" : ""}`}
            type="submit"
            kind={"primary"}
            href="/checkout"
            disabled={!user ? true : false}
          >
            Thanh toán
          </Button>
        </div>
      </div>
      {items.length <= 0 ? (
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
        <div className="flex flex-col-reverse items-start lg:flex-row gap-x-5">
          <div className="lg:max-w-[63%] flex-grow w-full">
            <div className="flex items-center justify-between mt-2 lg:mt-0 py-2 pl-5 bg-white rounded-lg pr-[100px] ">
              <Checkbox
                name="all"
                checked={check}
                onClick={handleCheck}
                control={control}
              >
                Chọn tất cả ({items.length} sản phẩm)
              </Checkbox>
              <div className="items-center justify-between hidden lg:flex gap-x-10">
                <div>
                  <span>Số lượng</span>
                </div>
                <div>
                  <span>Thành tiền</span>
                </div>
              </div>
            </div>
            <div className="w-full h-full pl-5 mt-2 bg-white rounded-lg md:mt-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex py-4 lg:items-center gap-x-5 lg:gap-x-0"
                >
                  <div className="flex items-center flex-shrink-0 overflow-hidden basis-[32%] md:basis-[16%]">
                    <Link to={`/detail-book?id=${item.id}`}>
                      <img
                        src={item.image}
                        alt=""
                        className="h-[120px] object-contain w-[120px] flex-shrink-0"
                      />
                    </Link>
                  </div>
                  <div className="flex lg:items-center basis-[60%] md:basis-[76%]  flex-col lg:flex-row">
                    <div className="flex flex-col basis-[60%] lg:px-3 lg:justify-between">
                      <Link to={`/detail-book?id=${item.id}`}>
                        <span className="lg:pb-[70px] text-sm block custom-line">
                          {item.name}
                        </span>
                      </Link>
                      <div className="flex items-center gap-x-5">
                        <span className="font-semibold">
                          {formatNumber(
                            item.price - (item.price * item.discount) / 100
                          )}
                          đ
                        </span>
                        <span className="text-xs line-through text-gray">
                          {formatNumber(item.price)} đ
                        </span>
                      </div>
                    </div>
                    <div className="basis-[40%] flex items-center gap-x-10 mt-2 lg:mt-0">
                      <div className="flex items-center gap-x-2 max-w-[6rem] justify-center border-gray2 border  rounded-lg px-2">
                        <span
                          onClick={() => handleDecrease(item.id)}
                          className="cursor-pointer md:text-xl text-gray2"
                        >
                          -
                        </span>
                        <span className="px-2 text-gray-200">
                          {item.quantity}
                        </span>
                        <span
                          onClick={() => handleIncrease(item.id)}
                          className="cursor-pointer md:text-xl text-gray2"
                        >
                          +
                        </span>
                      </div>
                      <span className="hidden font-semibold text-primary lg:block">
                        {formatNumber(
                          (item.price - (item.price * item.discount) / 100) *
                            item.quantity
                        )}{" "}
                        đ
                      </span>
                    </div>
                  </div>
                  <div
                    onClick={() => handleRemove(item.id)}
                    className="basis-[8%] flex items-center justify-center text-[#646464] hover:text-primary pr-3 md:pr-0"
                  >
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
              ))}
            </div>
          </div>
          <div className="w-full lg:flex-1">
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
              {Array(2)
                .fill(0)
                .map((item, index) => (
                  <div
                    className={`flex flex-col w-full px-5 ${
                      index >= 1 && "hidden"
                    } md:block md:${index >= 2 && "hidden"} lg:block`}
                    key={item}
                  >
                    <div className="w-full h-[1px] bg-gray1"></div>
                    <div className="flex flex-col mt-5">
                      <div className="flex items-center justify-between">
                        <span className="">Mã giảm 50% - Đơn hàng từ 500K</span>
                        <span className="underline text-blue1">Chi tiết</span>
                      </div>
                      <h3>
                        Không áp dụng cho phiếu quà tặng, Sách giáo khoa và Giấy
                        Photo
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
            <div className="hidden px-5 py-3 mt-5 bg-white rounded-lg max-h-fit lg:block">
              <div className="flex items-center justify-between pb-3">
                <span>Thành tiền</span>
                <span>{formatNumber(total)} đ</span>
              </div>
              <div className="flex items-center justify-between pb-3">
                <span>Phí vận chuyển</span>
                <span>{formatNumber(shippingFee)} đ</span>
              </div>
              <div className="w-full h-[1px] bg-gray1"></div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-medium">
                  Tổng số tiền (gồm VAT)
                </span>
                <span className="text-2xl font-semibold text-primary">
                  {formatNumber(totalPrice)} đ
                </span>
              </div>
              <Button
                className={`!w-full mt-2 ${!user ? "opacity-[0.5]" : ""}`}
                type="submit"
                kind={"primary"}
                href="/checkout"
                disabled={!user ? true : false}
              >
                Thanh toán
              </Button>
              <p className="mt-2 text-sm text-primary">
                Giá trên web chỉ áp dụng cho giá bán lẻ
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
