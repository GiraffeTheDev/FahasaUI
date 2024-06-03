import { instance } from "../config/axios";
const getAll = async (data) => {
  return instance.get(`http://localhost:8008/api/v1/suppliers`, data);
};
const getOne = async (id) => {
  return instance.get(`http://localhost:8008/api/v1/supplier/${id}`, id);
};

const deleteSupplier = async (id) => {
  return instance.delete(
    `http://localhost:8008/api/v1/delete-supplier/${id}`,
    id
  );
};

const update = async (data) => {
  return instance.put(`http://localhost:8008/api/v1/update-supplier`, data);
};
const create = async (data) => {
  return instance.post(`http://localhost:8008/api/v1/create-supplier`, data);
};
export { create, deleteSupplier, getAll, getOne, update };
