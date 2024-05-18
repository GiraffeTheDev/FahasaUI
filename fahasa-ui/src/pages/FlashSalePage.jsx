import React from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import BookCard from "../components/bookcard/BookCard";
import { cateFlashSale } from "../utils/common";
const FlashSalePage = () => {
  const { control, handleSubmit } = useForm({ mode: "onChange" });
  const handleChangeCate = (value) => {
    console.log(value);
  };
  return (
    <div>
      <nav className="flex mt-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
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
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180"
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
                className="text-sm font-medium text-gray-700 ms-1 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Projects
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180"
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
              <span className="text-sm font-medium text-gray-500 ms-1 md:ms-2 dark:text-gray-400">
                Flowbite
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="mt-5 rounded-lg">
        <img
          src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2024/FlashSale_SieeuSale_Week2_T524_Web_1920x400.jpg"
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div
        style={{
          background: `url("https://cdn0.fahasa.com/media/fahasa_web_image/banner.jpg")`,
        }}
        className="flex items-center justify-center w-full h-full py-5 mt-5 !rounded-lg"
      >
        <img
          src="https://cdn0.fahasa.com/media/fahasa_web_image/thunder.jpg"
          alt=""
          className="w-[180px] object-cover"
        />
      </div>
      <form action="" onSubmit={handleSubmit(handleChangeCate)}>
        <div className="flex items-center justify-between mt-5">
          {cateFlashSale.map((item) => (
            <div key={item.id} className="w-[120px] h-[120px] rounded-lg">
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
      <div className="grid grid-cols-5 gap-5 mt-5">
        {Array(25)
          .fill(0)
          .map((item) => (
            <BookCard key={uuidv4()} isCard={true} sale={true}></BookCard>
          ))}
      </div>
    </div>
  );
};

export default FlashSalePage;
