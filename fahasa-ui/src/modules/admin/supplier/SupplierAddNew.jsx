import React from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { create } from "../../../api/supplier";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import FormGroup from "../../../components/form/FormGroup";
import ImageUpload from "../../../components/image/ImageUpload";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";
import Radio from "../../../components/radio/Radio";
import { useImageUpload } from "../../../hooks/useImageUpload";
const SupplierAddNew = () => {
  const { control, handleSubmit, setValue, watch } = useForm({
    mode: "onSubmit",
  });
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddSupplier = async (value) => {
    try {
      const response = await create(value);
      if (!response.data.error) {
        toast(response.data.message);
        navigate("/manage/supplier");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { handleSelectImage, image } = useImageUpload(setValue);
  const watchOri = watch("original");
  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Thêm nhà cung cấp
        </h2>
        <form onSubmit={handleSubmit(handleAddSupplier)}>
          <FormGroup>
            <Label htmlFor="name">Tên Nhà cung cấp</Label>
            <Input
              name="name"
              control={control}
              placeholder="Nhập vào tên nhà cung cấp"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Ảnh nhà cung cấp</Label>
            <ImageUpload onChange={handleSelectImage} url={image}></ImageUpload>
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
          <Button type="submit" kind="primary">
            Thêm nhà cung cấp
          </Button>
        </form>
      </div>
    </>
  );
};

export default SupplierAddNew;
