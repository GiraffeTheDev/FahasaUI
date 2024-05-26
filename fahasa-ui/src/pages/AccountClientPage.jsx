import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "../components/classname/className";
import { sidebarAccount } from "../utils/common";

const AccountClientPage = () => {
  return (
    <>
      <div className="flex items-start mt-5 gap-x-5">
        <div className="w-[280px] bg-white min-h-[500px]">
          <h1 className="pl-5 mt-5 text-xl font-semibold uppercase text-primary">
            Tài khoản
          </h1>
          <div className="flex flex-col px-2 mt-5 gap-y-2">
            {sidebarAccount.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                className={classNames(
                  ({ isActive }) => (isActive ? "active" : "border-black"),
                  "border rounded-lg px-5 py-2  text-black"
                )}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full px-10 pt-5 pb-[80px] bg-white">
          <h1 className="text-xl uppercase">Bảng điều khiển của khách hàng</h1>
          <div className="flex flex-col items-center justify-center w-full gap-y-5">
            <div className="flex items-center justify-center  w-[80px] h-[80px] border-2 border-black rounded-full text-center p-2 font-semibold">
              Thân thiết
            </div>
            <h3>Điểm tích lũy 2024 : 0 Fpoint</h3>
          </div>
          <div className="flex flex-col p-5 mt-5 rounded-lg bg-begie">
            <h2>
              Cấp độ thành viên :{" "}
              <span className="font-semibold">Thân thiết</span>
            </h2>
            <h2 className="mt-5">Thông tin tài khoản</h2>
            <div className="mt-5">
              <h1>F-point : 0đ</h1>
              <h1>Freeship : 0 lần</h1>
              <h1>Số đơn hàng trong năm 2024 : 0 lần</h1>
              <h1>Số tiền đã thanh toán trong năm 2024 : 0đ</h1>
            </div>
          </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountClientPage;
