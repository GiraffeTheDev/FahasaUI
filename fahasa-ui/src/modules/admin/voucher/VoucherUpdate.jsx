import moment from "moment";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getOne, update } from "../../../api/voucher";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import FormGroup from "../../../components/form/FormGroup";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";
const VoucherUpdate = () => {
  const { control, handleSubmit, setValue, reset } = useForm({
    mode: "onSubmit",
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [params] = useSearchParams();
  const id = params.get("id");
  const navigate = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      const response = await getOne(id);
      reset(response.data.data);
      setStartDate(response.data.data.start_date);
      setEndDate(response.data.data.end_date);
    };
    fetch();
  }, [id, reset]);
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
  const handleUpdateVoucher = async (value) => {
    try {
      const response = await update(value);
      if (!response.data.error) {
        Swal.fire({
          title: "Cập nhật thành công",
          icon: "success",
        });
        navigate("/manage/voucher");
      }
    } catch (error) {
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
          Thêm mã giảm giá
        </h2>
        <form onSubmit={handleSubmit(handleUpdateVoucher)}>
          <FormGroup>
            <Label htmlFor="name">Mã giảm giá</Label>
            <Input
              name="voucher_code"
              control={control}
              placeholder="Nhập vào mã giảm giá"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Số lượng mã giảm giá</Label>
            <Input
              name="voucher_count"
              control={control}
              placeholder="Nhập vào số lượng mã giảm giá"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Phầm trăm giảm giá</Label>
            <Input
              name="discount_percent"
              control={control}
              placeholder="Nhập vào phần trăm giảm giá
              "
            ></Input>
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
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Ngày kết thúc</Label>
            <DatePicker
              dateFormat={"dd/MM/yyyy"}
              onChange={(endDate) => handleChangeEndTime(endDate)}
              showTimeSelect
              selected={endDate}
            />
          </FormGroup>
          <GapRow></GapRow>
          <div className="flex items-center gap-x-5">
            <Button type="submit" kind="primary">
              Cập nhật mã giảm giá
            </Button>
            <Button href="/manage/voucher" type="button" kind="semi">
              Quay lại
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default VoucherUpdate;
