import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBestBookDaily, getBestBookWeekly } from "../../api/product";
import BookCard from "../../components/bookcard/BookCard";
const title = [
  {
    id: 1,
    title: "Xu hướng theo ngày",
  },
  { id: 2, title: "Xu hướng theo tuần" },
];
const PurchaseTrending = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);
  const [bookDaily, setBookDaily] = useState([]);
  const [bookWeekly, setBookWeekly] = useState([]);
  const handleQueryClick = (query) => {
    console.log(query);
    setQuery(query.title);
    setActive(query.title);
  };
  useEffect(() => {
    const fetch = async () => {
      const bestDaily = await getBestBookDaily();
      const bestWeek = await getBestBookWeekly();
      setBookDaily(bestDaily.data.data);
      setBookWeekly(bestWeek.data.data);
      setActive(title[0].title);
    };
    fetch();
  }, []);
  return (
    <div className="pb-5 mt-5 bg-white rounded-bl-lg rounded-br-lg">
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
        <span className="text-xl font-semibold">Xu hướng mua sắm</span>
      </div>
      <div className="flex items-center py-3 pl-5 gap-x-3">
        <ul className="flex items-center gap-x-3">
          {title &&
            title.length > 0 &&
            title.map((item) => (
              <li
                key={item.id}
                onClick={() => handleQueryClick(item)}
                className={`cursor-pointer ${
                  item.title === active ? "text-primary" : ""
                }`}
              >
                {item.title}
              </li>
            ))}
        </ul>
      </div>
      <div className="grid grid-cols-5 gap-2 px-5 mt-2">
        {active === "Xu hướng theo ngày"
          ? bookDaily.map((item) => (
              <Link to={`/detail-book?id=${item.id}`} key={item.id}>
                <BookCard
                  book={item.Book}
                  className="transition-all hover:shadow-lg"
                ></BookCard>
              </Link>
            ))
          : bookWeekly.map((item) => (
              <Link to={`/detail-book?id=${item.id}`} key={item.id}>
                <BookCard
                  book={item.Book}
                  className="transition-all hover:shadow-lg"
                ></BookCard>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default PurchaseTrending;
