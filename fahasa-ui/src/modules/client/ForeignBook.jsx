import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooksWithCategoryEn } from "../../api/product";
import BookCard from "../../components/bookcard/BookCard";
import Button from "../../components/button/Button";

const ForeignBook = ({ header = true, title = [] }) => {
  const [active, setActive] = useState();
  const [query, setQuery] = useState(title[0]?.id);
  const [book, setBook] = useState([]);
  useEffect(() => {
    setActive(title[0]?.id);
    setQuery(title[0]?.id);
  }, [title]);
  const handleCateClick = (cate) => {
    setQuery(cate?.id);
    setActive(cate?.id);
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getBooksWithCategoryEn(query);

        setBook(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [query]);
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
      <div className="flex items-center py-3 pl-5 gap-x-3 ">
        <ul className="flex items-center gap-x-3">
          {title &&
            title.length > 0 &&
            title.map((cate) => (
              <li
                key={cate.id}
                onClick={() => handleCateClick(cate)}
                className={`cursor-pointer ${
                  cate.id === active ? "text-primary" : ""
                }`}
              >
                {cate.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 mt-5 gap-x-5 md:grid-cols-4 lg:grid-cols-5">
        {book.slice(0, 10).map((item, index) => (
          <Link
            key={item.id}
            to={`/detail-book?id=${item.id}`}
            className={`block ${index >= 2 && "hidden"} md:block md:${
              index >= 4 && "hidden"
            } lg:block`}
          >
            <BookCard book={item} isSold={false}></BookCard>
          </Link>
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
