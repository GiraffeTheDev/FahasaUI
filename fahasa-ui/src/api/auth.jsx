import { instance } from "../config/axios";
const register = async (data) => {
  return instance.post(`http://localhost:8008/api/v1/register`, data);
};
const verifyOTP = async (data) => {
  return instance.post(`http://localhost:8008/api/v1/verify-otp`, data);
};
const createAccount = async (data) => {
  return instance.post(`http://localhost:8008/api/v1/create-account`, data);
};
const sendOTP = async (data) => {
  return instance.post(`http://localhost:8008/api/v1/send-otp`, data);
};
const login = async (data) => {
  return instance.post(`http://localhost:8008/api/v1/login`, data);
};
const logout = async () => {
  return instance.post(`http://localhost:8008/api/v1/logout`);
};
const updatePassword = async (data) => {
  return instance.put(`http://localhost:8008/api/v1/update-password`, data);
};
export {
  createAccount,
  login,
  logout,
  register,
  sendOTP,
  updatePassword,
  verifyOTP,
};
