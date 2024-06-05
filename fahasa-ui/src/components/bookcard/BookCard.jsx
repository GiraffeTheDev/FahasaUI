import React from "react";
import { formatNumber } from "../../utils/function";
import Button from "../button/Button";

const BookCard = ({
  sale = false,
  className = "",
  isCard = false,
  stock = false,
  discount = 0,
  image = "",
  name = "",
  price = 0,
}) => {
  return (
    <div
      className={`flex flex-col justify-center p-2 bg-white rounded-lg ${className}`}
    >
      <div className="flex items-center justify-center w-full overflow-hidden bg-transparent">
        <img
          src={image}
          alt=""
          className="object-cover h-auto max-h-[190px] w-[190px]"
        />
      </div>
      <h3 className="mt-2 mr-2 custom-line">{name}</h3>
      <div className="flex items-center mt-2 gap-x-2">
        <span className="text-base font-bold text-red-500 ">
          {formatNumber(price - price * (discount / 100))} đ
        </span>
        {sale ? (
          <span className="p-1 text-xs text-white rounded-lg bg-primary">
            {"-"}
            {discount}
            {"%"}
          </span>
        ) : (
          ""
        )}
      </div>
      <h3 className="text-sm line-through ">{formatNumber(price)} đ</h3>
      {stock ? (
        <div className="relative h-4 mt-2 text-center bg-red-200 rounded-full dark:bg-gray-700">
          <div
            className="absolute inset-0 h-full bg-red-500 rounded-full z-5"
            style={{ width: "45%" }}
          />{" "}
          <h3 className="absolute w-full text-sm text-center text-white z-9">
            Đã bán 5
          </h3>
        </div>
      ) : (
        ""
      )}
      {isCard ? (
        <Button type="button" kind={"semi"} className="mt-5">
          Thêm giỏ hàng
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default BookCard;
