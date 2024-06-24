import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getOneOrder, updateOrderStatus } from "../../../api/order";
import Button from "../../../components/button/Button";
import DropDown from "../../../components/dropdown/DropDown";
import List from "../../../components/dropdown/List";
import Options from "../../../components/dropdown/Options";
import Select from "../../../components/dropdown/Select";
import FormGroup from "../../../components/form/FormGroup";
import LabelStatus from "../../../components/status/LabelStatus";
import { statusOrder } from "../../../utils/constant";
import { formartTime, formatNumber } from "../../../utils/function";
import OrderDetailTable from "./OrderDetailTable";
const OrderDetail = () => {
  const { setValue, handleSubmit, reset } = useForm({
    mode: "onChange",
  });
  const [params] = useSearchParams();
  const id = params.get("id");
  const navigate = useNavigate();
  const [order, setOrder] = useState({});
  const [select, setSelect] = useState("");
  useEffect(() => {
    const fetch = async () => {
      const response = await getOneOrder(id);
      setOrder(response.data.data);
      setSelect(response.data.data.order_status);
    };
    fetch();
  }, [id, reset]);
  if (!order) return null;
  const { InforData, DetailData } = order;
  const handleSelectStatus = (value) => {
    setValue("order_status", value);
    setSelect(value);
  };

  const handleUpdateOrder = async (value) => {
    try {
      const response = await updateOrderStatus({ ...value, id: id });
      if (!response.data.error) {
        const order = await getOneOrder(id);
        setOrder(order.data.data);
        Swal.fire({
          title: "Cập nhật thành công",
          icon: "success",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {!order ? (
        <span>Loading...</span>
      ) : (
        <>
          <div className="flex justify-between mt-5 InforDatas-center">
            <h1 className="text-2xl">Thông tin đơn hàng</h1>
            {order.order_status === "Chờ xác nhận" && (
              <LabelStatus
                kind="pending"
                title={order.order_status}
              ></LabelStatus>
            )}
            {order.order_status === "Đã xác nhận" && (
              <LabelStatus
                kind="confirm"
                title={order.order_status}
              ></LabelStatus>
            )}
            {order.order_status === "Đang vận chuyển" && (
              <LabelStatus
                kind="delivery"
                title={order.order_status}
              ></LabelStatus>
            )}
            {order.order_status === "Đã giao" && (
              <LabelStatus
                kind="success"
                title={order.order_status}
              ></LabelStatus>
            )}
            {order.order_status === "Đã hủy" && (
              <LabelStatus
                kind="failed"
                title={order.order_status}
              ></LabelStatus>
            )}
          </div>
          <div className="flex items-start justify-between px-5 mt-5">
            <div>
              <h1 className="text-xl ">Thông tin khách hàng</h1>
              <div className="mt-2">
                <h2 className="text-lg">{InforData?.user_name}</h2>
                <h2>{InforData?.phone}</h2>
                <p>
                  {`${InforData?.address_detail}, Xã ${InforData?.ward}, Huyện ${InforData?.district}, Tỉnh ${InforData?.province}`}
                </p>
              </div>
            </div>
            <div>
              <div>
                {" "}
                <h1 className="text-xl">Phương thức thanh toán</h1>
                <span className="mt-2">
                  {order?.payment_method === "banking"
                    ? "Chuyển khoản"
                    : "Thanh toán khi nhận hàng"}
                </span>
              </div>
              <div>
                <h1>Ngày đặt hàng</h1>
                <span>{formartTime(order?.createdAt)}</span>
              </div>
            </div>
          </div>
          <div className="mt-[50px]">
            <form action="" onSubmit={handleSubmit(handleUpdateOrder)}>
              <FormGroup>
                <h1 className="text-lg">Thay đổi trạng thái đơn hàng</h1>
                <div className="max-w-[250px]">
                  {" "}
                  <DropDown>
                    <Select
                      placeholder={select ? select : "Trạng thái đơn hàng"}
                    ></Select>
                    <List>
                      {statusOrder.length > 0 &&
                        statusOrder.map((item) => (
                          <Options
                            key={item.id}
                            onClick={() => handleSelectStatus(item.title)}
                          >
                            {item.title}
                          </Options>
                        ))}
                    </List>
                  </DropDown>
                </div>
              </FormGroup>
              <Button type="submit" kind="primary">
                Cập nhật
              </Button>
            </form>
          </div>
          <div className="mt-5">
            <h1 className="text-lg">Thông tin sản phẩm</h1>
            <div className="mt-5">
              <OrderDetailTable data={DetailData}></OrderDetailTable>
            </div>
            <div className="flex justify-end mt-5">
              <span className="font-semibold">
                Tổng tiền :{" "}
                {order.total_price === undefined
                  ? "NaN"
                  : formatNumber(order.total_price)}
                đ
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OrderDetail;
