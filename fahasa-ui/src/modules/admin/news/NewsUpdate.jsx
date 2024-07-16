import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import * as yup from "yup";
import { getOne, updateNews } from "../../../api/news";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import FormGroup from "../../../components/form/FormGroup";
import ImageUpload from "../../../components/image/ImageUpload";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";
import Loading from "../../../components/loading/Loading";
import Textarea from "../../../components/textarea/Textarea";
import { useImageUpload } from "../../../hooks/useImageUpload";
const schema = yup.object({
  title: yup.string().required("Nhập vào tiêu đề tin tức"),
  image: yup.string().required("Nhập vào ảnh bìa tin tức"),
  content: yup.string().required("Nhập vào nội dung tin tức"),
});
const NewsUpdate = () => {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { handleSelectImage, image } = useImageUpload(setValue);
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const id = params.get("id");
  useEffect(() => {
    const fetch = async () => {
      const response = await getOne(id);
      reset(response.data.data);
      setUrl(response.data.data.image);
    };
    fetch();
  }, [id, reset]);
  const handleUpdateNews = async (value) => {
    try {
      setIsSubmitting(true);
      const response = await updateNews(value);
      if (!response.data.error) {
        setIsSubmitting(false);
        Swal.fire({
          title: "Cập nhật thành công",
          icon: "success",
        });
        navigate("/manage/news");
      }
    } catch (error) {
      setIsSubmitting(false);
      Swal.fire({
        title: "Cập nhật thất bại",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Thêm mới tin tức
        </h2>
        <form onSubmit={handleSubmit(handleUpdateNews)}>
          <FormGroup>
            <Label htmlFor="title">Tiêu đề tin tức</Label>
            <Input
              name="title"
              control={control}
              placeholder="Nhập vào tiêu đề tin tức"
            ></Input>
            {errors?.title ? (
              <p className="text-sm text-red-500">{errors?.title?.message}</p>
            ) : (
              ""
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Ảnh bìa tin tức</Label>
            <ImageUpload
              onChange={handleSelectImage}
              url={image ? image : url}
            ></ImageUpload>
            {errors?.image ? (
              <p className="text-sm text-red-500">{errors?.image?.message}</p>
            ) : (
              ""
            )}
          </FormGroup>
          <GapRow></GapRow>

          <div>
            <FormGroup>
              <Label htmlFor="content">Mô tả sản phẩm</Label>
              <div className="w-full">
                <Textarea control={control} name="content"></Textarea>
              </div>
              {errors?.content ? (
                <p className="text-sm text-red-500">
                  {errors?.content?.message}
                </p>
              ) : (
                ""
              )}
            </FormGroup>
          </div>

          <Button
            type="submit"
            kind="primary"
            disabled={isSubmitting}
            className={`${isSubmitting ? "opacity-[0.5]" : ""}`}
          >
            {isSubmitting ? <Loading></Loading> : "Cập nhật tin tức"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default NewsUpdate;
