import React from "react";

const Breadcrumb = ({ type, category, genres }) => {
  return (
    <nav className="hidden mt-5 md:flex">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <div className="text-sm font-medium text-black hover:text-primary dark:text-gray-400 dark:hover:text-white">
          {type === "VI" ? "Sách Tiếng Việt" : "Sách nước ngoài"}
        </div>

        <div className="flex items-center hover:text-primary">
          <svg
            className="w-1 h-3 mx-1 text-black rtl:rotate-180 "
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
          <span className="text-sm font-medium text-black ms-1 hover:text-primary md:ms-2 dark:text-gray-400 dark:hover:text-white">
            {category}
          </span>
        </div>

        <div className="flex items-center hover:text-primary">
          <svg
            className="w-1 h-3 mx-1 text-black rtl:rotate-180 "
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
          <span className="text-sm font-medium text-black ms-1 hover:text-primary md:ms-2 dark:text-gray-400 dark:hover:text-white">
            {genres}
          </span>
        </div>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
