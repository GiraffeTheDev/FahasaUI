import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategoryEn, getAllCategoryVi } from "../../api/category";
import Button from "../../components/button/Button";
import Menu from "../../components/icon/Menu";
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
  const { items } = useSelector((state) => state.cart);
  return (
    <div className="relative w-full bg-white">
      <div className="lg:w-[1250px] w-full mx-auto items-start flex flex-col lg:flex-row lg:items-center py-2 bg-primary lg:bg-white gap-x-5">
        <div className="flex items-center justify-center w-full lg:w-[250px] lg:block">
          <Link to={"/"}>
            <img
              src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
              alt="logo"
              className="lg:w-[250px] h-12 w-[150px] object-contain"
            />
          </Link>
        </div>
        {hover && (
          <div
            onMouseEnter={handleHover}
            onMouseLeave={handleUnHover}
            className="transition-all flex items-start fixed z-50 bg-white rounded-lg shadow-md mx-auto h-[400px] w-[1250px] top-[120px] px-5 py-3"
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
                    className={`px-3 py-2 rounded-lg ${
                      hoveredItem === item.id ? "bg-gray4" : ""
                    }`}
                    to={item.to}
                  >
                    {item.name}
                  </Link>
                ))}
                <h1
                  onMouseEnter={() => setHoveredItem(1)}
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
        <div className="flex items-center pb-3 gap-x-5 lg:pb-0">
          <div onMouseEnter={handleHover}>
            <Menu />
          </div>

          <div className="flex items-center gap-x-5">
            <Search />

            {user?.isAdmin === 1 ? (
              <Button href="/dashboard" kind="semi" type="button">
                Đi tới trang quản lý
              </Button>
            ) : (
              <div className="flex items-center justify-end flex-1 gap-x-2 md:gap-x-8">
                {menu.map((item, index) => (
                  <Link key={item.id} to={item.to}>
                    <div
                      className={`flex flex-col items-center ${
                        index === 0 ? "hidden lg:flex" : ""
                      } ${index === 1 ? "relative" : ""}`}
                    >
                      {item.icon}
                      <span className="hidden lg:block">{item.title}</span>
                      {index === 1 ? (
                        <span className="absolute top-0 right-0 lg:right-[22px] flex items-center justify-center w-3 h-3 p-1 text-xs text-white translate-x-1/2 rounded-lg bg-success">
                          {items.length}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
