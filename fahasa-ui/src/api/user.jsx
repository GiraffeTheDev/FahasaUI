import { instance } from "../config/axios";
const getAll = async () => {
  return instance.get(`http://localhost:8008/api/v1/users`);
};
const updateInfor = async (data) => {
  return instance.put(`http://localhost:8008/api/v1/update-infor`, data);
};
const getOne = async (id) => {
  return instance.get(`http://localhost:8008/api/v1/user/${id}`, id);
};
const updateRole = async (data) => {
  return instance.put(`http://localhost:8008/api/v1/update-role`, data);
};
export { getAll, getOne, updateInfor, updateRole };
