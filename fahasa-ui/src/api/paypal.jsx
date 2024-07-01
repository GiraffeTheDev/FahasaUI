import { instance } from "../config/axios";
const createPayment = async (data) => {
  return instance.post(`http://localhost:8008/api/v1/create-payment`, data);
};
const getStatusCheckOut = async ({ paymentId, PayerID, total }) => {
  console.log(paymentId);
  return instance.get("http://localhost:8008/api/v1/success-checkout", {
    params: {
      paymentId,
      PayerID,
      total,
    },
  });
};

export { createPayment, getStatusCheckOut };
