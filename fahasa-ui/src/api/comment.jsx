import { instance } from "../config/axios";
const create = async (data) => {
  return instance.post(`http://localhost:8008/api/v1/create-comment`, data);
};
const getAllCommentWithProduct = async (productId) => {
  return instance.get(
    `http://localhost:8008/api/v1/all-comment/${productId}`,
    productId
  );
};
const getAllCommentExistProduct = async () => {
  return instance.get(`http://localhost:8008/api/v1/book-comment`);
};
const deleteComment = async (id) => {
  return instance.delete(
    `http://localhost:8008/api/v1/delete-comment/${id}`,
    id
  );
};
export {
  create,
  deleteComment,
  getAllCommentExistProduct,
  getAllCommentWithProduct,
};
