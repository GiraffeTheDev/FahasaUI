import { instance } from "../config/axios";
const createNewOrder = async (data) => {
  return instance.post(`http://localhost:8008/api/v1/create-order`, data);
};
const getAllOrder = async () => {
  return instance.get(`http://localhost:8008/api/v1/orders`);
};
const getOneOrder = async (id) => {
  return instance.get(`http://localhost:8008/api/v1/order/${id}`, id);
};
const updateOrderStatus = async (data) => {
  return instance.put(`http://localhost:8008/api/v1/update-order`, data);
};
const getRevenuePerMonth = async () => {
  return instance.get(`http://localhost:8008/api/v1/revenue-per-month`);
};
const getCountRevenue = async () => {
  return instance.get(`http://localhost:8008/api/v1/count-revenue-order`);
};
const getOrderByQuery = async (query) => {
  return instance.get(
    `http://localhost:8008/api/v1/order-query?query=${query}`,
    query
  );
};
const getAllOrderStatusForUser = async (query) => {
  return instance.get(
    `http://localhost:8008/api/v1/order-query-user?user_id=${query.user_id}&order_status=${query.order_status}`,
    query
  );
};
const getPurchasedBook = async (data) => {
  return instance.get(
    `http://localhost:8008/api/v1/book-purchased?user_id=${data.user_id}&book_id=${data.book_id}`,
    data
  );
};
export {
  createNewOrder,
  getAllOrder,
  getAllOrderStatusForUser,
  getCountRevenue,
  getOneOrder,
  getOrderByQuery,
  getPurchasedBook,
  getRevenuePerMonth,
  updateOrderStatus,
};
