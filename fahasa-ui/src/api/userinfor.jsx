import { instance } from "../config/axios";
const createUserInfor = async (data) => {
  return instance.post(`http://localhost:8008/api/v1/create-infor`, data);
};
const getUserInfor = async (id) => {
  return instance.get(`http://localhost:8008/api/v1/get-infor/${id}`, id);
};
export { createUserInfor, getUserInfor };
