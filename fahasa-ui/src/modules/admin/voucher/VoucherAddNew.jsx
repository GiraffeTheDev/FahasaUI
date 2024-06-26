import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as yup from "yup";
import { create } from "../../../api/voucher";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import FormGroup from "../../../components/form/FormGroup";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";
const schema = yup.object({
  voucher_code: yup.string().required("Nhập vào mã mã giảm giá"),
  voucher_count: yup.string().required("Nhập vào số lượng mã giảm giá"),
  discount_percent: yup.string().required("Nhập vào phần trăm giảm giá"),
  end_date: yup.date().required("Chọn ngày kết thúc"),
  start_date: yup.date().required("Chọn ngày bắt đầu"),
});
const VoucherAddNew = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();
  const handleChangeStartTime = (time) => {
    setStartDate(time);
    const date = new Date(time).getTime();
    const dateTime = moment(date).format("YYYY-MM-DD");
    setValue("start_date", dateTime);
  };
  const handleChangeEndTime = (time) => {
    setEndDate(time);
    const date = new Date(time).getTime();
    const dateTime = moment(date).format("YYYY-MM-DD");
    setValue("end_date", dateTime);
  };

  const handleAddNewVoucher = async (value) => {
    try {
      const response = await create(value);
      if (!response.data.error) {
        Swal.fire({
          title: "Thêm mới thành công",
          icon: "success",
        });
        navigate("/manage/voucher");
      }
    } catch (error) {
      Swal.fire({
        title: "Thêm mới thất bại",
        icon: "error",
      });
    }
  };
  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Thêm mã giảm giá
        </h2>
        <form onSubmit={handleSubmit(handleAddNewVoucher)}>
          <FormGroup>
            <Label htmlFor="name">Mã giảm giá</Label>
            <Input
              name="voucher_code"
              control={control}
              placeholder="Nhập vào mã giảm giá"
            ></Input>
            {errors?.voucher_code ? (
              <p className="mt-1 text-sm text-red-500">
                {errors?.voucher_code?.message}
              </p>
            ) : (
              ""
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Số lượng mã giảm giá</Label>
            <Input
              name="voucher_count"
              control={control}
              placeholder="Nhập vào số lượng mã giảm giá"
            ></Input>
            {errors?.voucher_count ? (
              <p className="mt-1 text-sm text-red-500">
                {errors?.voucher_count?.message}
              </p>
            ) : (
              ""
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Phầm trăm giảm giá</Label>
            <Input
              name="discount_percent"
              control={control}
              placeholder="Nhập vào phần trăm giảm giá
              "
            ></Input>
            {errors?.discount_percent ? (
              <p className="mt-1 text-sm text-red-500">
                {errors?.discount_percent?.message}
              </p>
            ) : (
              ""
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Ngày bắt đầu</Label>
            <DatePicker
              dateFormat={"dd/MM/yyyy"}
              onChange={(startDate) => handleChangeStartTime(startDate)}
              showTimeSelect
              minDate={new Date()}
              selected={startDate}
            />
            {errors?.start_date ? (
              <p className="mt-1 text-sm text-red-500">
                {errors?.start_date?.message}
              </p>
            ) : (
              ""
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Ngày kết thúc</Label>
            <DatePicker
              dateFormat={"dd/MM/yyyy"}
              onChange={(endDate) => handleChangeEndTime(endDate)}
              showTimeSelect
              selected={endDate}
            />
            {errors?.end_date ? (
              <p className="mt-1 text-sm text-red-500">
                {errors?.end_date?.message}
              </p>
            ) : (
              ""
            )}
          </FormGroup>
          <GapRow></GapRow>
          <Button type="submit" kind="primary">
            Thêm mã giảm giá
          </Button>
        </form>
      </div>
    </>
  );
};

export default VoucherAddNew;
