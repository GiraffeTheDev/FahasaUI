import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBookWithMultiQuery } from "../../api/product";
import useToggleValue from "../../hooks/useToggleValue";

const Search = () => {
  const [book, setBook] = useState([]);
  const [filter, setFilter] = useState("");
  const handleSearch = (e) => {
    setFilter(e.target.value);
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getBookWithMultiQuery(filter);
        console.log(response);
        setBook(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [filter]);
  const { value: open, handleToggleValue: handleOpen } = useToggleValue();
  return (
    <div className="w-[700px] relative">
      <div className="px-2 bg-white border rounded-lg border-gray">
        <form className="flex items-center" autoComplete="off">
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 text-sm text-gray-900 border-none rounded-lg outline-none dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cặp chống gù Tiger cho bé"
            onChange={handleSearch}
            onClick={handleOpen}
          />
          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 bg-red-500 rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4 font-bold text-white dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </form>
      </div>
      {open && (
        <div className="w-[700px] fixed top-[120px] px-5 pb-10 bg-white rounded-lg shadow-md min-h-[200px] z-50">
          <div className="flex items-center justify-between px-5 py-2 mt-5 rounded-lg bg-[#E9C46A]">
            <h1>Summer Fest - Đại tiệc mùa hè</h1>
            <img
              src="https://cdn0.fahasa.com/media/catalog/product/b/1/b1.jpeg"
              alt=""
              className="w-[50px] h-[30px] object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {book?.length > 0
              ? book.map((item) => (
                  <Link key={item.id} to={`/detail-book?id=${item.id}`}>
                    <div key={item.id} className="flex gap-x-2">
                      <div className="w-[150px] h-[80px]">
                        <img
                          src={item.image}
                          alt=""
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h1 className="text-sm max-w-[100px] custom-line">
                        {item.name}
                      </h1>
                    </div>
                  </Link>
                ))
              : ""}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
