import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import * as yup from "yup";
import { getOne } from "../../../api/product";
import { updateStockBook } from "../../../api/storage";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import Input from "../../../components/input/Input";
const schema = yup.object({
  stock: yup.string().required("Nhập vào số lượng sản phẩm"),
});
const ModelAddNewBook = ({ show, handleClose, id }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const [book, setBook] = useState({});
  useEffect(() => {
    const fetch = async () => {
      const response = await getOne(id);
      setBook(response.data.data);
    };
    fetch();
  }, [id]);
  const handleUpdateStock = async (value) => {
    try {
      const response = await updateStockBook({ ...value, id: id });
      if (!response.data.error) {
        Swal.fire({
          title: "Cập nhật số lượng thành công",
          icon: "success",
        });
        handleClose();
      }
    } catch (error) {
      Swal.fire({
        title: "Cập nhật số lượng thất bại",
        icon: "error",
      });
    }
  };

  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div className="relative p-6 bg-white rounded-lg shadow-lg h-[500px] w-[400px]">
        <span
          className="absolute top-0 right-0 flex items-center justify-end mt-4 mr-4 text-gray-500 cursor-pointer hover:text-gray-700"
          onClick={handleClose}
        >
          <div className="p-2 text-white rounded-lg bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </span>
        <h2 className="mb-4 text-2xl max-w-[300px]">Thêm số lượng sách</h2>
        <h2>
          <span className="block text-primary"> {book?.name}</span>
        </h2>
        <div className="flex items-center justify-center mt-2 select-none">
          <img
            src={book?.image}
            alt=""
            className="w-[300px] rounded-lg h-[200px] object-contain"
          />
        </div>
        <form onSubmit={handleSubmit(handleUpdateStock)} className="mt-2">
          <Input
            control={control}
            name="stock"
            placeholder="Thêm số lượng"
            className="!px-4 !py-3 !text-lg"
          ></Input>
          {errors?.stock ? (
            <p className="mt-2 text-sm text-red-500">
              {errors?.stock?.message}
            </p>
          ) : (
            ""
          )}
          <GapRow></GapRow>
          <Button type="submit" kind="primary">
            Thêm số lượng
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ModelAddNewBook;
