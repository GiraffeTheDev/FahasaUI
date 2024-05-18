import React from "react";
import { v4 as uuidv4 } from "uuid";
import ChangeCount from "../components/input/ChangeCount";
const BookDetailPage = () => {
  return (
    <div className="flex px-5 py-3 mt-5 bg-white rounded-lg gap-x-[80px]">
      <div className="h-[400px] w-[400px]">
        <img
          src="https://cdn0.fahasa.com/media/catalog/product/p/h/ph_c-h_a-ch_n-dung-k_-ph_m-t_i.jpg"
          alt=""
          className="w-full h-[390px] object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-base">
          Tâm Lý Học Tội Phạm - Phác Họa Chân Dung Kẻ Phạm Tội
        </h3>
        <div className="flex items-center justify-between max-w-[70%]">
          <span>
            Nhà cung cấp:<span className="text-blue1">AZ Việt Nam</span>
          </span>
          <span>
            Tác giả:<span className="font-semibold">Diệp Hồng Vũ</span>
          </span>
        </div>
        <div className="flex items-center justify-between max-w-[70%]">
          <span>
            Nhà xuất bản:<span className="font-semibold">NXB Thanh Niên</span>
          </span>
          <span>
            Hình thức bìa: <span className="font-semibold">Bìa Mềm</span>
          </span>
        </div>
        <div className="flex items-center gap-x-1">
          {Array(5)
            .fill(0)
            .map(() => (
              <span key={uuidv4()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
            ))}
        </div>
        <div className="flex items-center gap-x-3">
          <span className="text-4xl font-bold text-primary">69.000 đ</span>
          <span className="line-through">99.000 đ</span>
          <span className="px-2 py-1 text-white rounded-lg bg-primary">
            -30%
          </span>
        </div>
        <div className="flex items-center gap-x-3">
          <span className="text-lg font-base">Số lượng :</span>
          <ChangeCount></ChangeCount>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
