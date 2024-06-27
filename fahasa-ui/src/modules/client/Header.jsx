import MenuIcon from "@mui/icons-material/Menu";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategoryEn, getAllCategoryVi } from "../../api/category";
import Search from "../../components/input/Search";
import { headerIconUser, headerIcons } from "../../utils/common";
const title = [
  { id: 1, name: "Sách trong nước", to: "/bookpage-vi" },
  {
    id: 2,
    name: "Foreign Books",
    to: "/bookpage-en",
  },
];
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const menu = user ? headerIconUser : headerIcons;

  const [hoveredItem, setHoveredItem] = useState(null);
  const [categoryVI, setCategoryVI] = useState([]);
  const [categoryEN, setCategoryEN] = useState([]);
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(true);
  };
  const handleUnHover = () => {
    setHover(false);
  };
  useEffect(() => {
    const fetchCategories = async () => {
      const responseVi = await getAllCategoryVi();
      setCategoryVI(responseVi.data.data);
      const responseEn = await getAllCategoryEn();
      setCategoryEN(responseEn.data.data);
      setHoveredItem(1);
    };
    fetchCategories();
  }, []);
  return (
    <div className="relative w-full bg-white">
      <div className="w-[1250px] mx-auto flex items-center py-2 bg-white gap-x-5">
        <Link to={"/"}>
          <img
            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
            alt="logo"
            className="w-[250px] h-12"
          />
        </Link>

        <MenuIcon onMouseEnter={handleHover} />

        {hover && (
          <div
            onMouseEnter={handleHover}
            onMouseLeave={handleUnHover}
            className="transition-all flex items-start fixed z-50 bg-white rounded-lg shadow-md h-[400px] w-[1250px] top-[120px] px-5 py-3"
          >
            <div className="basis-[23%]">
              <span className="text-2xl font-semibold text-gray2">
                Danh mục sản phẩm
              </span>
              <ul className="flex flex-col mt-5 gap-y-2">
                {title.map((item) => (
                  <Link
                    key={item.id}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    // onMouseLeave={() => setHoveredItem(null)}
                    className={`px-3 py-2 rounded-lg ${
                      hoveredItem === item.id ? "bg-gray4" : ""
                    }`}
                    to={item.to}
                  >
                    {item.name}
                  </Link>
                ))}
                <h1
                  onMouseEnter={() => setHoveredItem(null)}
                  className="opacity-0"
                >
                  vanh
                </h1>
              </ul>
            </div>
            <div className="ml-5 w-[1px] h-full bg-gray2"></div>

            <div
              className={`flex-1 h-full ${hoveredItem === 1 ? "" : "hidden"}`}
            >
              <div className="h-full pl-5 transition-all">
                <div className="flex items-start p-2 gap-x-5">
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
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                  </div>
                  <h1 className="text-xl">Sách trong nước</h1>
                </div>
                <div className="grid grid-cols-4 gap-5 auto-cols-max">
                  {categoryVI.slice(0, 8).map((item) => (
                    <div key={item.id}>
                      <h1 className="text-sm font-semibold cursor-pointer">
                        {item?.name}
                      </h1>
                      <ul className="flex flex-col mt-2 gap-y-1">
                        {item?.CategoryGenres.map((genres) => (
                          <li
                            key={genres.id}
                            className="text-xs cursor-pointer hover:text-yellow-500"
                          >
                            {genres?.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`flex-1 h-full ${hoveredItem === 2 ? "" : "hidden"}`}
            >
              <div className="h-full pl-5 transition-all">
                <div className="flex items-center p-2 gap-x-5">
                  <div className="p-2 bg-blue-500 rounded-lg">
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
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                  </div>
                  <h1 className="text-xl">Foreign Books</h1>
                </div>
                <div className="grid h-full grid-cols-4 gap-5 auto-cols-max">
                  {categoryEN.slice(0, 8).map((item) => (
                    <div key={item.id}>
                      <h1 className="text-sm font-semibold cursor-pointer">
                        {item?.name}
                      </h1>
                      <ul className="flex flex-col mt-2 gap-y-1">
                        {item?.CategoryGenres.map((genres) => (
                          <li
                            key={genres.id}
                            className="text-xs cursor-pointer hover:text-yellow-500"
                          >
                            {genres?.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <Search />

        <div className="flex items-center justify-end flex-1 gap-x-8">
          {menu.map((item) => (
            <Link key={item.id} to={item.to}>
              <div className="flex flex-col items-center">
                {item.icon}
                <span>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
