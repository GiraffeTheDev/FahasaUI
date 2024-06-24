import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { createNewOrder } from "../api/order";
import { getUserInfor } from "../api/userinfor";
import Button from "../components/button/Button";
import Checkbox from "../components/checkbox/Checkbox";
import Radio from "../components/radio/Radio";
import { clearCart } from "../redux/cart/slice";
import { formatNumber } from "../utils/function";
const CheckoutPage = () => {
  const { control, handleSubmit, watch, setValue } = useForm({
    mode: "onSubmit",
  });
  const { items } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const total = items.reduce(
    (sum, item) =>
      sum + (item.price - (item.price * item.discount) / 100) * item.quantity,
    0
  );
  const shippingFee = 32000; // Example shipping fee
  const totalPrice = total + shippingFee;
  const [infor, setInfor] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (items.length <= 0) {
      navigate("/cart");
    }
  }, [items.length, navigate]);
  const dispatch = useDispatch();

  const payment = watch("payment_method");
  const watchInfor = watch("infor_id");

  useEffect(() => {
    if (user === null) {
      Swal.fire("Bạn phải đăng nhập mới có thể thanh toán đơn hàng");
      navigate("/cart");
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetch = async () => {
      const response = await getUserInfor(user.id);
      setInfor(response.data.data);
      setValue("infor_id", infor.id);
      setValue("total_price", totalPrice);
      setValue("shipping_fee", shippingFee);
      setValue(
        "orderDetails",
        items.map((item) => ({
          book_id: item.id,
          quantity: item.quantity,
          price: item.price,
        }))
      );
    };
    fetch();
  }, [infor.id, totalPrice, setValue, items, user.id]);
  const handleCheckout = async (value) => {
    try {
      const response = await createNewOrder(value);
      if (!response.data.error) {
        Swal.fire({
          title: "Thanh toán thành công",
          icon: "success",
        });
        dispatch(clearCart());
      }
    } catch (error) {
      Swal.fire({
        title: "Thanh toán thất bại",
        icon: "success",
      });
    }
  };

  useEffect(() => {
    document.title = "One Step CheckOut FAHASA";
  }, []);
  return (
    <div className="mt-5 ">
      <form onSubmit={handleSubmit(handleCheckout)}>
        <div className="px-5 py-5 bg-white rounded-lg ">
          <h1 className="mb-5 text-2xl font-base">Địa chỉ giao hàng</h1>
          <div className="flex flex-col gap-y-2">
            {infor.map((item) => (
              <Radio
                key={item.id}
                name={"infor_id"}
                checked={parseInt(watchInfor) === item.id}
                control={control}
                value={item.id}
              >{`${item.user_name} | ${item.address_detail} - Xã ${item.ward} - Huyện ${item.district} - Tỉnh ${item.province}`}</Radio>
            ))}
            <Link
              to={"/new/account-address"}
              className="flex items-center gap-x-2 "
            >
              <span className="text-primary">
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
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span>Giao hàng đến địa chỉ khác</span>
            </Link>
          </div>
        </div>
        <div className="px-5 py-5 mt-5 bg-white rounded-lg">
          <h1 className="text-2xl font-base">Phương thức vận chuyển</h1>
          <Radio name={"shipping_fee"} checked={true} control={control}>
            <span className="font-semibold">
              Giao hàng tiêu chuẩn : 32.000 đ
            </span>
          </Radio>
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
            {items.map((item) => (
              <div className="mt-5" key={uuidv4()}>
                <div className="w-full h-[1px] mb-5 bg-black"></div>
                <div className="flex items-start">
                  <div className="w-[145px]">
                    <img
                      src={item.image}
                      className=" object-cover max-h-[145px]"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 gap-x-4">
                    <div className="w-[700px]">{item?.name}</div>
                    <div className="flex flex-1 gap-x-[60px]">
                      <div className="flex flex-col">
                        <span>
                          {formatNumber(
                            item.price - (item.price * item.discount) / 100
                          )}
                          đ
                        </span>
                        <span className="text-sm line-through text-gray2">
                          {formatNumber(item.price)}đ
                        </span>
                      </div>
                      <span>{item.quantity}</span>
                      <span className=" text-yellow1">
                        {formatNumber(
                          (item.price - (item.price * item.discount) / 100) *
                            item.quantity
                        )}{" "}
                        đ
                      </span>
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
              <span>Thành tiền : {formatNumber(total)} đ</span>
              {items.length >= parseInt(0) ? (
                <span>
                  Phí vận chuyển tiêu chuẩn : {formatNumber(shippingFee)} đ
                </span>
              ) : (
                <></>
              )}
              <span>
                Tổng số tiền (gồm VAT) :{" "}
                <span className="text-yellow1">
                  {formatNumber(totalPrice)} đ
                </span>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center gap-x-2">
              <Checkbox checked={true} control={control}></Checkbox>
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
      </form>
    </div>
  );
};

export default CheckoutPage;
