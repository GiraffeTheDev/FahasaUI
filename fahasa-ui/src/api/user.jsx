import { instance } from "../config/axios";
const getAll = async () => {
  return instance.get(`http://localhost:8008/api/v1/users`);
};

export { getAll };
