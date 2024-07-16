import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllOrderStatusForUser } from "../../api/order";
import { getUserInfor } from "../../api/userinfor";
import Table from "../../components/table/Table";
import { convertTime } from "../../utils/function";
const title = [
  {
    id: 1,
    name: "Đơn hàng",
  },
  {
    id: 2,
    name: "Ngày",
  },
  {
    id: 3,
    name: "Người nhận",
  },
  {
    id: 4,
    name: "Tổng thanh toán",
  },
  {
    id: 5,
    name: "Trạng thái đơn",
  },
];
const DashBoardClient = () => {
  const [order, setOrder] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const [infor, setInfor] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await getUserInfor(user.id);
      setInfor(response.data.data);
    };
    fetch();
  }, [user?.id]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getAllOrderStatusForUser({
          user_id: user.id,
        });

        setOrder(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [user?.id]);
  if (!infor) return null;

  return (
    <>
      <h1 className="text-xl uppercase">Bảng điều khiển của khách hàng</h1>
      <div className="flex flex-col items-center justify-center w-full gap-y-5">
        <div className="flex items-center justify-center  w-[80px] h-[80px] border-2 border-black rounded-full text-center p-2 font-semibold">
          Thân thiết
        </div>
        <h3>Điểm tích lũy 2024 : 0 Fpoint</h3>
      </div>
      <div className="flex flex-col p-5 mt-5 rounded-lg bg-begie">
        <h2>
          Cấp độ thành viên : <span className="font-semibold">Thân thiết</span>
        </h2>
        <h2 className="mt-5">Thông tin tài khoản</h2>
        <div className="mt-5">
          <h1>F-point : 0đ</h1>
          <h1>Freeship : 0 lần</h1>
          <h1>Số đơn hàng trong năm 2024 : 0 lần</h1>
          <h1>Số tiền đã thanh toán trong năm 2024 : 0đ</h1>
        </div>
      </div>
      <div className="flex items-center mt-5 gap-x-3">
        <>
          {order.length > 0 ? (
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
                    order.slice(0, 5).map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{convertTime(item?.createdAt)}</td>
                        <td>{item?.InforData?.user_name}</td>
                        <td>{item?.total_price}</td>
                        <td>{item?.order_status}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </>
          ) : (
            ""
          )}
        </>
      </div>
      {infor.length > 0 ? (
        <div className="flex items-start justify-between mt-5">
          <div className="basis-1/2">
            <h1 className="text-xl uppercase">Địa chỉ mặc định</h1>
            <div className="flex flex-col pl-2">
              <span className="font-medium">Địa chỉ thanh toán mặc định</span>
              <div className="flex flex-col mt-2 text-sm gap-y-2">
                <h1>{infor[0]?.user_name}</h1>
                <h1>{infor[0]?.address_detail}</h1>
                <span>
                  Xã {infor[0]?.ward} - Huyện {infor[0]?.district} - Tỉnh{" "}
                  {infor[0]?.province}
                </span>
                <h1>Tel : {infor[0]?.phone}</h1>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <h1 className="text-xl uppercase">Địa chỉ khác</h1>
            {infor.length > 0 &&
              infor.slice(1).map((item) => (
                <div
                  className="flex flex-col mt-2 text-sm gap-y-2"
                  key={item.id}
                >
                  <h1>{item?.user_name}</h1>
                  <h1>{item?.address_detail}</h1>
                  <span>
                    Xã {item?.ward} - Huyện {item?.district} - Tỉnh{" "}
                    {item?.province}
                  </span>
                  <h1>Tel : {item?.phone}</h1>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <>
          <h1 className="mt-5 text-xl uppercase text-primary">Sổ địa chỉ</h1>
          <div className="flex items-start gap-x-10">
            <div>
              <h1>Địa chỉ thanh toán mặc định</h1>
              <h1>Bạn chưa khai báo địa chỉ thanh toán mặc định</h1>
              <span className="text-primary">Sửa địa chỉ</span>
            </div>
            <div>
              <h1>Địa chỉ giao hàng mặc định</h1>
              <h1>Bạn chưa khai báo địa chỉ nhận hàng mặc định</h1>
              <span className="text-primary">Sửa địa chỉ</span>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default DashBoardClient;
