import { instance } from "../config/axios";
const getAll = async (data) => {
  return instance.get(`http://localhost:8008/api/v1/genres`, data);
};
