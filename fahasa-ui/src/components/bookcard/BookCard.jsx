import React from "react";

const BookCard = ({ sale = false, className = "" }) => {
  return (
    <div
      className={`flex flex-col justify-center p-2 bg-white rounded-lg ${className}`}
    >
      <div className="flex items-center justify-center w-full overflow-hidden bg-transparent">
        <img
          src="https://cdn0.fahasa.com/media/catalog/product/9/7/9781982167288.jpg"
          alt=""
          className="object-cover h-auto max-h-[190px] w-fit"
        />
      </div>
      <h3 className="mt-2 mr-2 custom-line">
        Violet Bent Backwards Over The Grass
      </h3>
      <span className="mt-2 text-base font-bold text-red-500">51.750 đ</span>{" "}
      {sale ? <span>-10%</span> : ""}
      <h3 className="text-sm">115.000 đ</h3>
      <div className="relative h-4 mt-2 text-center bg-red-200 rounded-full dark:bg-gray-700">
        <div
          className="absolute inset-0 h-full bg-red-500 rounded-full z-5"
          style={{ width: "45%" }}
        />{" "}
        <h3 className="absolute w-full text-sm text-center text-white z-9">
          Đã bán 5
        </h3>
      </div>
    </div>
  );
};

export default BookCard;
