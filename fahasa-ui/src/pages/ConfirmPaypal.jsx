import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getStatusCheckOut } from "../api/paypal";
import { clearCart } from "../redux/cart/slice";

const ConfirmPaypal = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const total = items.reduce(
    (sum, item) =>
      sum + (item.price - (item.price * item.discount) / 100) * item.quantity,
    0
  );
  const shippingFee = 32000; // Example shipping fee
  const totalPrice = total > 0 && total + shippingFee;
  const [params] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const paymentId = query.get("paymentId");
    const PayerID = query.get("PayerID");
    console.log();
    const confirmPayment = async () => {
      try {
        const response = await getStatusCheckOut({
          paymentId,
          PayerID,
          total: total,
        });
        console.log(response);
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: "Thank you for your purchase!",
        });
        dispatch(clearCart());
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Payment Failed",
          text: "There was an issue with your payment.",
        });
      }
    };

    if (paymentId && PayerID) {
      confirmPayment();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, dispatch]);

  return <div>check</div>;
};

export default ConfirmPaypal;
