import React from "react";
import { NavLink } from "react-router-dom";
import BookCard from "../../components/bookcard/BookCard";
import Button from "../../components/button/Button";
import classNames from "../../components/classname/className";

const BrandHightlight = ({ header = false }) => {
  return (
    <div className="pb-5 mt-5 bg-white rounded-bl-lg rounded-br-lg">
      {header ? (
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
          <span className="text-xl font-semibold">Thương hiệu nổi bật</span>
        </div>
      ) : (
        ""
      )}
      <div className="flex items-center py-3 pl-5 gap-x-3">
        {Array(4)
          .fill(0)
          .map((item) => (
            <NavLink
              to={"/trending"}
              key={item}
              className={classNames(({ isActive }) =>
                isActive ? "active" : ""
              )}
            >
              Mcbooks
            </NavLink>
          ))}
      </div>
      <div className="grid grid-cols-5 gap-2 px-5 mt-2">
        {Array(5)
          .fill(0)
          .map((item) => (
            <BookCard
              key={item}
              className="transition-all hover:shadow-lg"
            ></BookCard>
          ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <Button type="button" kind={"semi"}>
          Xem thêm
        </Button>
      </div>
    </div>
  );
};

export default BrandHightlight;
