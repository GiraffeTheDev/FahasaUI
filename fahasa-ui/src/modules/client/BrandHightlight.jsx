import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooksWithSupplier } from "../../api/product";
import BookCard from "../../components/bookcard/BookCard";
import Button from "../../components/button/Button";

const BrandHightlight = ({ header = false, title = [] }) => {
  const [active, setActive] = useState();
  const [query, setQuery] = useState(title[0]?.name);
  const [book, setBook] = useState([]);
  useEffect(() => {
    setActive(title[0]?.name);
    setQuery(title[0]?.name);
  }, []);
  const handleSupplierClick = (supplier) => {
    setQuery(supplier?.name);
    setActive(supplier?.name);
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getBooksWithSupplier(query);
        setBook(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [query]);
  return (
    <div className="pb-5 mt-5 bg-white rounded-lg ">
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
        <ul className="flex items-center gap-x-3">
          {title &&
            title.length > 0 &&
            title.map((supplier) => (
              <li
                key={supplier.id}
                onClick={() => handleSupplierClick(supplier)}
                className={`cursor-pointer ${
                  supplier.name === active ? "text-primary" : ""
                }`}
              >
                {supplier.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="grid grid-cols-5 gap-2 px-5 mt-2">
        {book &&
          book.length > 0 &&
          book.map((item) => (
            <Link to={`/detail-book?id=${item.id}`} key={item.id}>
              <BookCard
                image={item.image}
                name={item.name}
                price={item.price}
                discount={item.discount}
                sale={item.sale}
                key={item.id}
                className="transition-all hover:shadow-lg"
              ></BookCard>
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

export default BrandHightlight;
