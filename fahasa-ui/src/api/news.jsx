import { instance } from "../config/axios";
const getAllnews = async () => {
  return instance.get(`http://localhost:8008/api/v1/news`);
};
const getOne = async (id) => {
  return instance.get(`http://localhost:8008/api/v1/new/${id}`, id);
};
const create = async (data) => {
  return instance.post("http://localhost:8008/api/v1/create-news", data);
};
const deleteNews = async (id) => {
  return instance.delete(`http://localhost:8008/api/v1/delete-news/${id}`, id);
};
const updateNews = async (data) => {
  return instance.put(`http://localhost:8008/api/v1/update-news`, data);
};
const getAllNewsBySearch = async (title) => {
  return instance.get(
    `http://localhost:8008/api/v1/search-news?title=${title}`,
    title
  );
};
export {
  create,
  deleteNews,
  getAllnews,
  getAllNewsBySearch,
  getOne,
  updateNews,
};
