import { instance } from "../config/axios";
const getAllAuthor = async (data) => {
  return instance.get(`http://localhost:8008/api/v1/authors`, data);
};
const getOne = async (id) => {
  return instance.get(`http://localhost:8008/api/v1/author/${id}`, id);
};

const deleteAuthor = async (id) => {
  return instance.delete(
    `http://localhost:8008/api/v1/delete-author/${id}`,
    id
  );
};

const update = async (data) => {
  return instance.put(`http://localhost:8008/api/v1/update-author`, data);
};
const create = async (data) => {
  return instance.post(`http://localhost:8008/api/v1/create-author`, data);
};
const getAllAuthorBySearch = async (name) => {
  return instance.get(
    `http://localhost:8008/api/v1/search-author?name=${name}`,
    name
  );
};
export {
  create,
  deleteAuthor,
  getAllAuthor,
  getAllAuthorBySearch,
  getOne,
  update,
};
