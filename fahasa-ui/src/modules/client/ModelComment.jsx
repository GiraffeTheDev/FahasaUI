import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { create, getAllCommentWithProduct } from "../../api/comment";
import Button from "../../components/button/Button";
import GapRow from "../../components/common/GapRow";
import Input from "../../components/input/Input";
import StarComponent from "../../components/star/StarComponent";
import Textarea from "../../components/textarea/Textarea";
const schema = yup.object({
  name: yup
    .string()
    .required("Thông tin này quan trọng vui lòng không để trống"),
  content: yup
    .string()
    .required("Thông tin này quan trọng vui lòng không để trống"),
});
const ModelComment = ({ show, handleClose, id, user_id }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { user } = useSelector((state) => state.auth);
  const handleAddNewComment = async (value) => {
    try {
      const response = await create({
        ...value,
        product_id: id,
        user_id: user_id,
      });
      if (!response.data.error) {
        handleClose();
        await getAllCommentWithProduct(id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center ">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={handleClose}
      ></div>
      <div className="relative p-6 bg-white rounded-lg shadow-lg pb-5 h-[550px] w-[700px]">
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

        <h2 className="w-full mb-4 text-2xl text-center">
          Viết đánh giá sản phẩm
        </h2>
        {/* {
          <div className="pb-1 text-primary">
            {!user ? "Bạn phải đăng nhập mới có thể đánh giá sản phẩm" : ""}
          </div>
        } */}
        <img
          src="https://cdn0.fahasa.com/media/wysiwyg/Thang-10-2018/REVIEW-1263x80-446ae7.jpg"
          alt=""
          className="rounded-lg"
        />
        <StarComponent className="justify-center"></StarComponent>
        <form onSubmit={handleSubmit(handleAddNewComment)} className="mt-3">
          <Input
            control={control}
            name="name"
            placeholder="Nhập tên hiển thị khi đánh giá"
            className="!px-4 !py-3"
          ></Input>
          {errors?.name ? (
            <p className="mt-2 text-sm text-red-500">{errors?.name?.message}</p>
          ) : (
            ""
          )}
          <GapRow></GapRow>
          <Textarea
            control={control}
            name="content"
            placeholder={"Nhập nhận xét của bạn về sản phẩm"}
          ></Textarea>
          {errors?.content ? (
            <p className="mt-2 text-sm text-red-500">
              {errors?.content?.message}
            </p>
          ) : (
            ""
          )}
          <GapRow></GapRow>
          <Button
            type="submit"
            kind="primary"
            disabled={!user ? true : false}
            className={`${!user ? "opacity-[0.5]" : ""}`}
          >
            Thêm mới bình luận
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ModelComment;
