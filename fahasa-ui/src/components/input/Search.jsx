import React from "react";

const Search = () => {
  return (
    <div className="w-[630px] bg-white rounded-lg px-2 border border-gray">
      <form className="flex items-center" autoComplete="off">
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 text-sm text-gray-900 border-none rounded-lg outline-none dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Cặp chống gù Tiger cho bé"
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
  );
};

export default Search;
