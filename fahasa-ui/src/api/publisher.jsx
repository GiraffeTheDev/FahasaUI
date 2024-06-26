import { instance } from "../config/axios";
const getAllPublisher = async (data) => {
  return instance.get(`http://localhost:8008/api/v1/all-publisher`, data);
};
const getOne = async (id) => {
  return instance.get(`http://localhost:8008/api/v1/publisher/${id}`, id);
};

const deletePublisher = async (id) => {
  return instance.delete(
    `http://localhost:8008/api/v1/delete-publisher/${id}`,
    id
  );
};

const update = async (data) => {
  return instance.put(`http://localhost:8008/api/v1/update-publisher`, data);
};
const create = async (data) => {
  return instance.post(`http://localhost:8008/api/v1/create-publisher`, data);
};
const getAllPublisherBySearch = async (name) => {
  return instance.get(
    `http://localhost:8008/api/v1/search-publisher?name=${name}`,
    name
  );
};

export {
  create,
  deletePublisher,
  getAllPublisher,
  getAllPublisherBySearch,
  getOne,
  update,
};
