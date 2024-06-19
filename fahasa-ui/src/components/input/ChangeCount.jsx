import React from "react";
const ChangeCount = ({ count = 1, handleDecrement, handleIncrement }) => {
  return (
    <>
      <div className="relative flex items-center max-w-[8rem] border border-gray-400 rounded-lg py-2 px-2">
        <button
          type="button"
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 rounded-s-lg"
          onClick={handleDecrement}
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          id="quantity-input"
          className="block w-full text-sm text-center text-gray-900 border-gray-300 border-none outline-none bg-gray-50 border-x-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          placeholder={count}
          required
        />
        <button
          type="button"
          id="increment-button"
          data-input-counter-increment="quantity-input"
          className=" dark:bg-gray-700 rounded-e-lg"
          onClick={handleIncrement}
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ChangeCount;
