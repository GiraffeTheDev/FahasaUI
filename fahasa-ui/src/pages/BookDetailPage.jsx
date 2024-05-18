import React from "react";

const BookDetailPage = () => {
  return (
    <div className="flex px-5 py-3 mt-5 bg-white rounded-lg ">
      <div className="h-[400px] w-[400px]">
        <img
          src="https://cdn0.fahasa.com/media/catalog/product/p/h/ph_c-h_a-ch_n-dung-k_-ph_m-t_i.jpg"
          alt=""
          className="w-full h-[390px] object-cover"
        />
      </div>
      <div className="flex-1">
        <h3>Tâm Lý Học Tội Phạm - Phác Họa Chân Dung Kẻ Phạm Tội</h3>
        <div className="flex items-center justify-between">
          <span>Nhà cung cấp:AZ Việt Nam</span>
          <span>Tác giả:Diệp Hồng Vũ</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Nhà xuất bản:NXB Thanh Niên</span>
          <span>Hình thức bìa:Bìa Mềm</span>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
