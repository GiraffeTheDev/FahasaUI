import { instance } from "../config/axios";
const getAllGenres = async (data) => {
  return instance.get(`http://localhost:8008/api/v1/all-genres`, data);
};
const getOne = async (id) => {
  return instance.get(`http://localhost:8008/api/v1/genres/${id}`, id);
};

const deleteGenres = async (id) => {
  return instance.delete(
    `http://localhost:8008/api/v1/delete-genres/${id}`,
    id
  );
};

const update = async (data) => {
  return instance.put(`http://localhost:8008/api/v1/update-genres`, data);
};
const create = async (data) => {
  return instance.post(`http://localhost:8008/api/v1/create-genres`, data);
};
export { create, deleteGenres, getAllGenres, getOne, update };
