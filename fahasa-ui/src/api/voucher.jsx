import { instance } from "../config/axios";
const getAll = async (data) => {
  return instance.get(`http://localhost:8008/api/v1/vouchers`, data);
};
const getOne = async (id) => {
  return instance.get(`http://localhost:8008/api/v1/voucher/${id}`, id);
};

const deleteVoucher = async (id) => {
  return instance.delete(
    `http://localhost:8008/api/v1/delete-voucher/${id}`,
    id
  );
};

const update = async (data) => {
  return instance.put(`http://localhost:8008/api/v1/update-voucher`, data);
};
const create = async (data) => {
  return instance.post(`http://localhost:8008/api/v1/create-voucher`, data);
};
const getAllVoucherSearch = async (query) => {
  return instance.get(
    `http://localhost:8008/api/v1/search-voucher?voucher_code=${query}`,
    query
  );
};
export { create, deleteVoucher, getAll, getAllVoucherSearch, getOne, update };
