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
const login = async (data) => {
  return instance.post(`http://localhost:8008/v1/login-auth`, data);
};
const logout = async () => {
  return instance.post(`http://localhost:8008/v1/logout-auth`);
};
export { createAccount, login, logout, register, verifyOTP };
