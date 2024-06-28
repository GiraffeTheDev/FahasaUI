import { instance } from "../config/axios";
const updateStockBook = async (data) => {
  return instance.put(`http://localhost:8008/api/v1/storage-book`, data);
};

export { updateStockBook };
