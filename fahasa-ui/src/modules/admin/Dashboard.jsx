import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Link, useNavigate } from "react-router-dom";
import {
  getCountRevenue,
  getOrderByQuery,
  getRevenuePerMonth,
} from "../../api/order";
import ActionEdit from "../../components/action/ActionEdit";
import LabelStatus from "../../components/status/LabelStatus";
import Table from "../../components/table/Table";
import { convertTime, formatNumber } from "../../utils/function";
// Đăng ký các thành phần cần thiết
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);
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
    name: "Thay đổi trạng thái đơn hàng",
  },
];
const Dashboard = () => {
  const [revenue, setRevenue] = useState([]);
  const [order, setOrder] = useState([]);
  const [pendingOrder, setPendingOrder] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      const response = await getRevenuePerMonth();
      const orderTotal = await getCountRevenue();
      const resPending = await getOrderByQuery("Chờ xác nhận");
      setPendingOrder(resPending.data.data);
      setOrder(orderTotal.data.data);
      setRevenue(response.data.data);
    };
    fetch();
  }, []);

  return (
    <div className="h-[500px] mt-5">
      <div className="h-full p-5 rounded-lg ">
        <h1 className="text-2xl select-none">Doanh thu</h1>
        <div className="flex items-start justify-between mt-5">
          <div className="basis-[70%] border rounded-lg px-5 py-5 border-gray2">
            <Bar
              className="!flex-shrink-0 "
              data={{
                labels: revenue.map((data) => data.month),
                datasets: [
                  {
                    label: "Doanh thu thuần",
                    data: revenue.map((data) => data.total_revenue),
                    backgroundColor: ["#C40C0C"],
                    borderRadius: 5,
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: "Revenue Source",
                  },
                },
              }}
            />
          </div>

          <div className="flex flex-col items-start gap-y-3">
            <Link to={"/manage/order"}>
              <div className="flex items-center gap-x-2">
                <div className="text-white rounded-lg p-9 bg-yellow1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                  <span>Số đơn hàng</span>
                  <span>{order.total_order}</span>
                </div>
              </div>
            </Link>
            <div className="flex items-center gap-x-3">
              <div className="text-white rounded-lg p-9 bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center gap-y-2">
                <span>Tổng doanh thu</span>
                <span>
                  {order.total_revenue === undefined
                    ? "NaN"
                    : formatNumber(order.total_revenue)}{" "}
                  đ
                </span>
              </div>
            </div>
            <Link to={"/manage/book"}>
              <div className="flex items-center gap-x-3">
                <div className="text-white rounded-lg p-9 bg-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                  <span>Số đầu sách</span>
                  <span>{order.total_book} </span>
                </div>
              </div>
            </Link>
            <Link to={"/manage/storage"}>
              <div className="flex items-center gap-x-3">
                <div className="text-white rounded-lg p-9 bg-gray2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                  <span>Kho</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="p-5 mt-5 border rounded-lg border-gray2">
          <h1 className="mb-5 text-xl">Đơn hàng chờ xác nhận</h1>
          <Table>
            <thead className="bg-[#f7f7f8] ">
              <tr>
                {title.map((item) => (
                  <th key={item.id}>{item.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pendingOrder.length > 0 &&
                pendingOrder.map((item) => (
                  <tr key={item.id}>
                    <td>{`HD000000${item.id}`}</td>
                    <td>
                      {item.order_status === "Chờ xác nhận" && (
                        <LabelStatus
                          kind="pending"
                          title={item.order_status}
                        ></LabelStatus>
                      )}
                    </td>
                    <td>{formatNumber(item.total_price)}đ</td>
                    <td>{convertTime(item.createdAt)}</td>

                    <td className="">
                      <div className="flex items-center justify-center gap-x-3">
                        <ActionEdit
                          onClick={() => {
                            navigate(`/manage/order-detail?id=${item.id}`);
                          }}
                        ></ActionEdit>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
