import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllOrder } from "../../../api/order";
import ActionView from "../../../components/action/ActionView";
import LabelStatus from "../../../components/status/LabelStatus";
import Table from "../../../components/table/Table";
import { convertTime, formatNumber } from "../../../utils/function";
const title = [
  {
    id: 1,
    name: "Số Hóa đơn",
  },
  {
    id: 2,
    name: "Trạng thái đơn hàng",
  },
  {
    id: 3,
    name: "Tổng thanh toán",
  },
  {
    id: 4,
    name: "Ngày đặt hàng",
  },
  {
    id: 5,
    name: "Hành động",
  },
];
const OrderTable = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await getAllOrder();
      setOrder(response.data.data);
    };
    fetch();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <Table>
        <thead className="bg-[#f7f7f8] ">
          <tr>
            {title.map((item) => (
              <th key={item.id}>{item.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {order.length > 0 &&
            order.map((item) => (
              <tr key={item.id}>
                <td>{`HD000000${item.id}`}</td>
                <td>
                  {item.order_status === "Chờ xác nhận" && (
                    <LabelStatus
                      kind="pending"
                      title={item.order_status}
                    ></LabelStatus>
                  )}
                  {item.order_status === "Đã xác nhận" && (
                    <LabelStatus
                      kind="confirm"
                      title={item.order_status}
                    ></LabelStatus>
                  )}
                  {item.order_status === "Đang vận chuyển" && (
                    <LabelStatus
                      kind="delivery"
                      title={item.order_status}
                    ></LabelStatus>
                  )}
                  {item.order_status === "Đã giao" && (
                    <LabelStatus
                      kind="success"
                      title={item.order_status}
                    ></LabelStatus>
                  )}
                  {item.order_status === "Đã hủy" && (
                    <LabelStatus
                      kind="failed"
                      title={item.order_status}
                    ></LabelStatus>
                  )}
                </td>
                <td>{formatNumber(item.total_price)}đ</td>
                <td>{convertTime(item.createdAt)}</td>

                <td className="">
                  <div className="flex items-center justify-center gap-x-3">
                    <ActionView
                      onClick={() => {
                        navigate(`/manage/order-detail?id=${item.id}`);
                      }}
                    ></ActionView>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default OrderTable;
