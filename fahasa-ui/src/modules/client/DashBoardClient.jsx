import React from "react";

const DashBoardClient = () => {
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
    </>
  );
};

export default DashBoardClient;
