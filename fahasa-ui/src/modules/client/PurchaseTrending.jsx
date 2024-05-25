import React from "react";
import { Link } from "react-router-dom";
import BookCard from "../../components/bookcard/BookCard";

const PurchaseTrending = () => {
  return (
    <div className="pb-5 mt-5 bg-white rounded-bl-lg rounded-br-lg">
      <div className="flex items-center p-2 bg-red-300 rounded-tl-lg rounded-tr-lg gap-x-5">
        <div className="p-2 bg-red-500 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>
        </div>
        <span className="text-xl font-semibold">Xu hướng mua sắm</span>
      </div>
      <div className="flex items-center py-3 pl-5 gap-x-3">
        {Array(3)
          .fill(0)
          .map((item) => (
            <Link to={"/trending"} key={item}>
              Xu hướng theo ngày
            </Link>
          ))}
      </div>
      <div className="grid grid-cols-5 gap-2 px-5 mt-2">
        {Array(10)
          .fill(0)
          .map((item) => (
            <BookCard
              key={item}
              className="transition-all hover:shadow-lg"
            ></BookCard>
          ))}
      </div>
    </div>
  );
};

export default PurchaseTrending;
