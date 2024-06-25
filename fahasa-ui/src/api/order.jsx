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
export {
  createNewOrder,
  getAllOrder,
  getCountRevenue,
  getOneOrder,
  getOrderByQuery,
  getRevenuePerMonth,
  updateOrderStatus,
};
