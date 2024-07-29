import React, { useEffect, useState } from "react";
import { getAllCategory } from "../../api/category";

const CategoryProduct = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const category = await getAllCategory();
      setCategory(category.data.data);
    };
    fetch();
  }, []);
  return (
    <div className="hidden p-5 mt-10 bg-white bg-gray-500 rounded-lg lg:block">
      <div className="flex items-center pb-5 gap-x-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <span className="text-xl font-semibold">Danh mục sản phẩm</span>
      </div>
      <div className="grid grid-cols-5 mt-5 lg:gap-x-5 md:grid-cols-6 lg:grid-cols-10">
        {category.length > 0 &&
          category.slice(0, 10).map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center text-center gap-y-3  ${
                index >= 5 && "hidden"
              } md:flex  md:${index >= 6 && "hidden"} lg:flex`}
            >
              <div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] rounded-lg shadow-md">
                <img
                  src={item.image}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
