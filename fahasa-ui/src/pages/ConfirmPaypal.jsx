import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getStatusCheckOut } from "../api/paypal";
import { clearCart } from "../redux/cart/slice";

const ConfirmPaypal = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [check, setCheck] = useState(null);
  const total = items.reduce(
    (sum, item) =>
      sum + (item.price - (item.price * item.discount) / 100) * item.quantity,
    0
  );
  const location = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const paymentId = query.get("paymentId");
    const PayerID = query.get("PayerID");
    const confirmPayment = async () => {
      try {
        const response = await getStatusCheckOut({
          paymentId,
          PayerID,
          total: total,
          user_id: user?.id,
        });
        if (!response.data.error) {
          setCheck(true);
          dispatch(clearCart());
        }
      } catch (error) {
        setCheck(false);
      }
    };

    if (paymentId && PayerID) {
      confirmPayment();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {check ? (
        <div className="flex flex-col items-center justify-center p-5 mt-5 bg-white rounded-lg">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <h1>Thanh toán thành công, Cảm ơn bạn đã mua sắm cùng Fahasa</h1>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-5 mt-5 bg-white rounded-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1>Xảy ra vấn để trong lúc thanh toán, vui lòng thanh toán lại</h1>
        </div>
      )}
    </>
  );
};

export default ConfirmPaypal;
