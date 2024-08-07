import { instance } from "../config/axios";
const create = async (data) => {
  return instance.post(`http://localhost:8008/api/v1/create-book`, data);
};
const removeBook = async (data) => {
  return instance.put(`http://localhost:8008/api/v1/delete-book`, data);
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
const getBooksWithCategoryVi = async (id) => {
  return instance.get(
    `http://localhost:8008/api/v1/book-category-vi?id=${id}`,
    id
  );
};
const getBooksWithCategoryEn = async (id) => {
  return instance.get(
    `http://localhost:8008/api/v1/book-category-en?id=${id}`,
    id
  );
};
const getBooksWithQuery = async (filters) => {
  const { cateId = "", priceRange = "", supId = "" } = filters;
  return instance.get(`http://localhost:8008/api/v1/book-query`, {
    params: {
      cateId,
      priceRange,
      supId,
    },
  });
};
const getBooksVI = async () => {
  return instance.get(`http://localhost:8008/api/v1/book-vi`);
};
const getBooksEN = async () => {
  return instance.get(`http://localhost:8008/api/v1/book-en`);
};
const getBestBookDaily = async () => {
  return instance.get(`http://localhost:8008/api/v1/best-daily`);
};
const getBestBookWeekly = async () => {
  return instance.get(`http://localhost:8008/api/v1/best-week`);
};
const getBookWithMultiQuery = async (query) => {
  return instance.get(
    `http://localhost:8008/api/v1/book-search-query?query=${query}`,
    query
  );
};
export {
  create,
  getAllBook,
  getAllBookFlashSale,
  getAllBookSearch,
  getBestBookDaily,
  getBestBookWeekly,
  getBookFlashSaleHightLight,
  getBooksEN,
  getBooksVI,
  getBooksWithCategoryEn,
  getBooksWithCategoryVi,
  getBooksWithQuery,
  getBooksWithSupplier,
  getBookWithMultiQuery,
  getOne,
  removeBook,
  update,
};
