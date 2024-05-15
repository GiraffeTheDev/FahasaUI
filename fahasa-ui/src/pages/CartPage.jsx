import React, { useState } from "react";
import Button from "../components/button/Button";

const CartPage = () => {
  const [count, setCount] = useState(0);
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
        ""
      )}
    </div>
  );
};

export default CartPage;
