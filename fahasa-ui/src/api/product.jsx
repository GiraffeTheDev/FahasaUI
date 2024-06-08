import { instance } from "../config/axios";
const create = async (data) => {
  return instance.post(`http://localhost:8008/api/v1/create-book`, data);
};
const removeBook = async (id) => {
  return instance.delete(`http://localhost:8008/api/v1/delete-book/${id}`, id);
};
const update = async (data) => {
  return instance.put(`http://localhost:8008/api/v1/update-book`, data);
};
const getOne = async (id) => {
  return instance.get(`http://localhost:8008/api/v1/book/${id}`, id);
};
const getAllBook = async () => {
  return instance.get(`http://localhost:8008/api/v1/books`);
};
const getAllBookSearch = async (name) => {
  return instance.get(
    `http://localhost:8008/api/v1/search-books?name=${name}`,
    name
  );
};
const getAllBookFlashSale = async () => {
  return instance.get(`http://localhost:8008/api/v1/flashsale-books`);
};
const getBookFlashSaleHightLight = async () => {
  return instance.get(`http://localhost:8008/api/v1/book-flashsale-hightlight`);
};
const getBooksWithSupplier = async (name) => {
  return instance.get(
    `http://localhost:8008/api/v1/book-supplier?name=${name}`,
    name
  );
};
const getBooksWithCategory = async (id) => {
  return instance.get(
    `http://localhost:8008/api/v1/book-category?id=${id}`,
    id
  );
};
export {
  create,
  getAllBook,
  getAllBookFlashSale,
  getAllBookSearch,
  getBookFlashSaleHightLight,
  getBooksWithCategory,
  getBooksWithSupplier,
  getOne,
  removeBook,
  update,
};
