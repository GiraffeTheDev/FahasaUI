import { instance } from "../config/axios";
const getAll = async () => {
  return instance.get(`http://localhost:8008/api/v1/categories`);
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
export { create, deleteCategory, getAll };
