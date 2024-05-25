import React from "react";
import { NavLink } from "react-router-dom";
import BookCard from "../components/bookcard/BookCard";
import Button from "../components/button/Button";
import classNames from "../components/classname/className";

const ForeignBook = ({ header = true }) => {
  return (
    <div className="pb-5 mt-5 bg-white rounded-bl-lg rounded-br-lg">
      {header ? (
        <div className="flex items-center p-2 rounded-tl-lg rounded-tr-lg gap-x-5">
          <div className="p-2 bg-blue-500 rounded-lg">
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
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <span className="text-xl font-semibold">ForeignBooks</span>
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

export default ForeignBook;
