import { instance } from "../config/axios";
const getAllCategory = async () => {
  return instance.get(`http://localhost:8008/api/v1/categories`);
};
const getOne = async (id) => {
  return instance.get(`http://localhost:8008/api/v1/category/${id}`, id);
};
const create = async (data) => {
  return instance.post("http://localhost:8008/api/v1/create-category", data);
};
const deleteCategory = async (id) => {
  return instance.delete(
    `http://localhost:8008/api/v1/delete-category/${id}`,
    id
  );
};
const updateCategory = async (data) => {
  return instance.put(`http://localhost:8008/api/v1/update-category`, data);
};
export { create, deleteCategory, getAllCategory, getOne, updateCategory };
