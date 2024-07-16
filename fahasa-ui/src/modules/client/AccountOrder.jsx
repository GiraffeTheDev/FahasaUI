import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getAllOrderStatusForUser, updateOrderStatus } from "../../api/order";
import Button from "../../components/button/Button";
import Comment from "../../components/icon/Comment";
import { naviOrder } from "../../utils/constant";
import { formatNumber } from "../../utils/function";

const AccountOrder = () => {
  const [active, setActive] = useState();
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const handleClick = (item) => {
    setActive(item);
    setQuery(item);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        if (!query) {
          const response = await getAllOrderStatusForUser({
            order_status: "Chờ xác nhận",
            user_id: user.id,
          });
          setOrder(response.data.data);
        } else {
          const response = await getAllOrderStatusForUser({
            order_status: query,
            user_id: user.id,
          });
          setOrder(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [query, user]);
  useEffect(() => {
    setActive("Chờ xác nhận");
  }, []);
  const handleCancelOrder = async (id) => {
    try {
      const response = await updateOrderStatus({ id, order_status: "Đã hủy" });
      if (!response.data.error) {
        Swal.fire({
          title: "Hủy đơn thành công",
          icon: "success",
        });
        const order = await getAllOrderStatusForUser({
          order_status: "Chờ xác nhận",
          user_id: user.id,
        });
        setOrder(order.data.data);
      }
    } catch (error) {
      Swal.fire({
        title: "Hủy đơn không thành công thành công",
        icon: "error",
      });
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-[500px]">
      <ul className="flex items-center justify-between gap-x-5">
        {naviOrder &&
          naviOrder.length > 0 &&
          naviOrder.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item.title)}
              className={`cursor-pointer ${
                item.title === active ? "text-primary" : ""
              }`}
            >
              {item.title}
            </li>
          ))}
      </ul>
      <div className="flex flex-col px-5 py-2 mt-5 rounded-lg gap-y-2">
        {order.length > 0 &&
          order.map((item) => (
            <div
              key={item.id}
              className="flex flex-col px-5 py-2 rounded-lg bg-gray3"
            >
              <span className="mb-1">{`HD000000000${item.id}`}</span>
              <div className="flex flex-col gap-y-2">
                {item?.DetailData?.length > 0 &&
                  item?.DetailData?.map((detail) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      <div className="h-[100px] w-[150px]">
                        <img
                          src={detail?.Book?.image}
                          alt=""
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <h1 className="basis-[50%]">{detail?.Book?.name}</h1>
                      <span>{`x${detail.quantity}`}</span>
                      {item.order_status === "Đã giao" ? (
                        <Link
                          to={`/detail-book?id=${detail.book_id}`}
                          className="flex justify-end pb-5 mt-2"
                        >
                          <Comment></Comment>
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
              </div>
              <span className="flex justify-end w-full">
                Tổng thanh toán : {formatNumber(item?.total_price)}đ
              </span>
              {item.order_status === "Chờ xác nhận" ? (
                <div className="flex justify-end pb-5 mt-2">
                  <Button
                    type="button"
                    kind="primary"
                    className="w-[200px]"
                    onClick={() => handleCancelOrder(item.id)}
                  >
                    Hủy đơn
                  </Button>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AccountOrder;
