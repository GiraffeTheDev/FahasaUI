import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getAllCategoryVi } from "../api/category";
import {
  getAllBook,
  getBooksWithCategoryVi,
  getBooksWithQuery,
} from "../api/product";
import { getViSupplier } from "../api/supplier";
import BookCard from "../components/bookcard/BookCard";
import Radio from "../components/radio/Radio";
import usePagination from "../hooks/usePagination";
import { priceRanges } from "../utils/constant";
const BookPageVI = () => {
  const { control, watch, handleSubmit } = useForm({
    mode: "onChange",
  });
  const price = watch("priceRange");
  const supFil = watch("supId");
  const cateFil = watch("cateId");
  const [book, setBook] = useState([]);
  const [title, setTitle] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [active, setActive] = useState();
  const [query, setQuery] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getAllBook();
        const category = await getAllCategoryVi();
        const sup = await getViSupplier();
        setSupplier(sup.data.data);
        setTitle(category.data.data);
        setBook(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  useEffect(() => {
    const fetch = async () => {
      if (query) {
        const response = await getBooksWithCategoryVi(query);
        setBook(response.data.data);
      }
    };
    fetch();
  }, [query]);
  const { pageCount, handlePageClick, currentItems } = usePagination(book, 20);
  const handleClick = (item) => {
    setActive(item);
    setQuery(item);
  };
  const handleSubmitData = async (value) => {
    try {
      const response = await getBooksWithQuery(value);
      setBook(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-start mt-5 gap-x-5">
        <div className=" hidden lg:block lg:w-[300px] bg-white min-h-[500px] px-5 py-2">
          <div>
            <form onChange={handleSubmit(handleSubmitData)} autoComplete="off">
              <div className="py-3">
                <h1 className="text-lg font-semibold">Nhóm sản phẩm</h1>
                <h1
                  className="font-semibold cursor-pointer text-yellow1"
                  onClick={() => handleClick(" ")}
                >
                  Sách Tiếng Việt
                </h1>
                <div className="flex items-center py-2 pl-3 gap-x-3">
                  <ul className="flex flex-col items-start gap-y-3">
                    {title &&
                      title.length > 0 &&
                      title.map((item) => (
                        <li
                          key={item.id}
                          onClick={() => handleClick(item.id)}
                          className={`cursor-pointer ${
                            item.id === active ? "text-primary" : ""
                          }`}
                        >
                          <Radio
                            control={control}
                            name={"cateId"}
                            checked={parseInt(cateFil) === item.id}
                            value={item.id}
                            hidden={true}
                          >
                            <span className="text-sm">{item.name}</span>
                          </Radio>
                        </li>
                      ))}
                  </ul>
                </div>
                <h1 className="mb-2 text-xl font-semibold">Giá</h1>
                <ul className="flex flex-col items-start gap-y-3">
                  {priceRanges &&
                    priceRanges.length > 0 &&
                    priceRanges.map((item) => (
                      <li key={uuidv4()} className={`cursor-pointer `}>
                        <Radio
                          control={control}
                          name={"priceRange"}
                          checked={price === item.value}
                          value={item.value}
                        >
                          <span className="text-sm">{item.label}</span>
                        </Radio>
                      </li>
                    ))}
                </ul>
              </div>
              {/* <div className="py-3">
                <h1 className="mb-2 text-xl font-semibold">Thể loại</h1>
                <ul className="flex flex-col items-start gap-y-2">
                  {genres &&
                    genres.length > 0 &&
                    genres.map((item) => (
                      <li
                        key={item.id}
                        onClick={() => handleClick(item)}
                        className={`cursor-pointer`}
                      >
                        <Checkbox
                          name="all"
                          checked={true}
                          onClick={() => {
                            item;
                          }}
                        >
                          <span className="text-sm"> {item.name}</span>
                        </Checkbox>
                      </li>
                    ))}
                </ul>
              </div> */}
              <div className="py-3">
                <h1 className="mb-2 text-xl font-semibold">Nhà cung cấp</h1>
                <ul className="flex flex-col items-start gap-y-2">
                  {supplier &&
                    supplier.length > 0 &&
                    supplier.map((item) => (
                      <li key={uuidv4()} className={`cursor-pointer `}>
                        <Radio
                          className="!items-start"
                          control={control}
                          name={"supId"}
                          checked={parseInt(supFil) === item.id}
                          value={item.id}
                        >
                          <span className="text-sm">{item.name}</span>
                        </Radio>
                      </li>
                    ))}
                </ul>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 px-10 py-10 bg-white">
          <div className="flex items-center gap-x-5">
            <div className="rounded-lg">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2024/DiamondSaiGonBook_0624_MobileApp_1080x1080.jpg"
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="rounded-lg">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2024/DiamondDeli_0624_MobileApp_1080x1080.jpg"
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-5">
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <Link key={item.id} to={`/detail-book?id=${item.id}`}>
                  <BookCard book={item}></BookCard>
                </Link>
              ))
            ) : (
              <div className="flex items-center justify-center">
                Không có kết quả
              </div>
            )}
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
      </div>
    </>
  );
};

export default BookPageVI;
