import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getOne, update } from "../../../api/supplier";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import FormGroup from "../../../components/form/FormGroup";
import ImageUpload from "../../../components/image/ImageUpload";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";
import Radio from "../../../components/radio/Radio";
import { useImageUpload } from "../../../hooks/useImageUpload";
const SupplierUpdate = () => {
  const { control, handleSubmit, setValue, watch, reset } = useForm({
    mode: "onSubmit",
  });
  const watchOri = watch("original");
  const [url, setUrl] = useState("");
  const [params] = useSearchParams();
  const id = params.get("id");
  const navigate = useNavigate();
  const updateSupplier = async (value) => {
    try {
      const response = await update(value);
      if (!response.data.error) {
        navigate("/manage/supplier");
        Swal.fire({
          title: "Cập nhật thành công",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Cập nhật thất bại",
        icon: "error",
      });
    }
  };
  const { handleSelectImage, image } = useImageUpload(setValue);
  useEffect(() => {
    const fetch = async () => {
      const response = await getOne(id);
      reset(response.data.data);
      setUrl(response.data.data.image);
    };
    fetch();
  }, [id, reset]);

  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Cập nhật nhà cung cấp
        </h2>
        <form onSubmit={handleSubmit(updateSupplier)}>
          <FormGroup>
            <Label htmlFor="name">Tên danh mục</Label>
            <Input
              name="name"
              control={control}
              placeholder="Nhập vào tên thể loại"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Ảnh Nhà cung cấp</Label>
            <ImageUpload
              onChange={handleSelectImage}
              url={image ? image : url}
            ></ImageUpload>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Xuất xứ</Label>
            <div className="flex items-center gap-x-5">
              <Radio
                className="!items-start"
                control={control}
                name={"original"}
                checked={watchOri === "Domestic"}
                value={"Domestic"}
              >
                <span className="text-sm">Domestic</span>
              </Radio>
              <Radio
                className="!items-start"
                control={control}
                name={"original"}
                checked={watchOri === "Foreign"}
                value={"Foreign"}
              >
                <span className="text-sm">Foreign</span>
              </Radio>
            </div>
          </FormGroup>
          <GapRow></GapRow>
          <div className="flex items-center gap-x-5">
            <Button type="submit" kind="primary">
              Cập nhật nhà cung cấp
            </Button>
            <Button type="submit" kind="semi" href="/manage/supplier">
              Quay lại
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SupplierUpdate;
