import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getAllBookFlashSale } from "../api/product";
import BookCard from "../components/bookcard/BookCard";
import usePagination from "../hooks/usePagination";
import { cateFlashSale } from "../utils/common";
const FlashSalePage = () => {
  const { control, handleSubmit } = useForm({ mode: "onChange" });
  const [book, setBook] = useState([]);
  const { pageCount, handlePageClick, currentItems } = usePagination(book, 30);
  useEffect(() => {
    const fetch = async () => {
      const response = await getAllBookFlashSale();
      setBook(response.data.data);
    };
    fetch();
  }, []);
  return (
    <div>
      <nav className="hidden mt-5 lg:flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <Link className="inline-flex items-center" to={"/"}>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </a>
          </Link>
          <Link to={"/flash-sale"}>
            <div className="flex items-center hover:text-primary">
              <svg
                className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="text-sm font-medium text-gray-700 ms-1 hover:text-primary md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Flash Sale
              </a>
            </div>
          </Link>
        </ol>
      </nav>

      <div className="hidden mt-5 rounded-lg md:block">
        <img
          src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2024/FlashSale_SieeuSale_Week2_T524_Web_1920x400.jpg"
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="mt-5 md:hidden">
        <img
          src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2024/flashsalenho072024.jpg"
          alt=""
        />
      </div>
      <div
        style={{
          background: `url("https://cdn0.fahasa.com/media/fahasa_web_image/banner.jpg")`,
        }}
        className="flex items-center justify-center w-full h-full py-5 mt-2 md:mt-5 !rounded-lg"
      >
        <img
          src="https://cdn0.fahasa.com/media/fahasa_web_image/thunder.jpg"
          alt=""
          className="w-[180px] object-cover"
        />
      </div>
      <form action="">
        <div className="flex items-center justify-between mt-5">
          {cateFlashSale.map((item, index) => (
            <div
              key={item.id}
              className={`w-[120px] h-[120px] rounded-lg block ${
                index >= 3 && "hidden"
              } md:block md:${index >= 6 && "hidden"} lg:block`}
            >
              <div className="flex flex-col items-center h-full py-3 text-center bg-white rounded-lg">
                <img
                  src={item.url}
                  alt=""
                  className="object-cover mb-2 w-11 h-11"
                />
                <span className="text-sm text">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </form>
      <div className="grid grid-cols-2 gap-2 mt-5 md:gap-5 md:grid-cols-4 lg:grid-cols-5">
        {currentItems.map((item) => (
          <BookCard key={uuidv4()} isCard={true} book={item}></BookCard>
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
              />
            </svg>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
              />
            </svg>
          }
          renderOnZeroPageCount={null}
          className="flex items-center gap-x-5 pagination"
        />
      </div>
    </div>
  );
};

export default FlashSalePage;
