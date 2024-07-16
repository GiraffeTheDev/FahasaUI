import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBookFlashSaleHightLight } from "../api/product";
import BookCard from "../components/bookcard/BookCard";
import BannerSwipper from "../modules/client/BannerSwipper";
import BrandHightlight from "../modules/client/BrandHightlight";
import CategoryProduct from "../modules/client/CategoryProduct";
import ForeignBook from "../modules/client/ForeignBook";
import PurchaseTrending from "../modules/client/PurchaseTrending";
import PurchaseTrendingWeekly from "../modules/client/PurchaseTrendingWeekly";
import { bannerSmall } from "../utils/common";
const suppliers = [
  {
    id: 1,
    name: "Nhã Nam",
  },
  {
    id: 2,
    name: "MegaBook",
  },
  {
    id: 3,
    name: "NXB Kim Đồng",
  },
];
const suppliers1 = [
  {
    id: 3,
    name: "Đinh Tị",
  },
  {
    id: 1,
    name: "MCBooks",
  },
  {
    id: 2,
    name: "AZ Việt Nam",
  },
];

const cateforeign = [
  {
    id: 9,
    name: "Children Book",
  },
  {
    id: 10,
    name: "Dictionaries & Languages",
  },
  {
    id: 11,
    name: "Fiction",
  },
];
const HomePage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await getBookFlashSaleHightLight();
      setBooks(response.data.data);
    };
    fetch();
  }, []);

  return (
    <div className="mt-4">
      <div className="flex w-full  gap-x-5 lg:h-[350px] h-[190px]">
        <div className="lg:max-w-[850px] lg:h-[350px] h-[190px] w-full lg:basis-[70%] md:h-[250px] md:block">
          <BannerSwipper></BannerSwipper>
        </div>
        <div className="flex-col hidden w-full lg:h-[350px] lg:flex justify-between lg:basis-[30%] ">
          <div className="w-full rounded-lg">
            <img
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2024/DoiTac_SubBanner_392x156.jpg"
              alt=""
              className="w-full h-[166px] rounded-lg"
            />
          </div>
          <div className="w-full rounded-lg">
            <img
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2024/Trangthanhtoankhongtienmat_0724_Subbanner_392x156.png"
              alt=""
              className="w-full h-[166px] rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="items-center hidden w-full mt-5 md:flex gap-x-2 md:mt-[70px] lg:mt-5">
        {bannerSmall.length > 0 &&
          bannerSmall.map((item) => (
            <Link key={item.id} className="rounded-lg">
              <img
                src={item.url}
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </Link>
          ))}
      </div>
      <div
        style={{
          backgroundImage:
            'url("https://cdn0.fahasa.com/media/fahasa_web_image/flash_sale_background_image.jpg")',
        }}
        className="p-5 mt-2 md:mt-5 rounded-xl"
      >
        <div className="flex justify-between px-2 py-5 bg-white rounded-lg">
          <img
            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/flashsale/label-flashsale.svg?q="
            alt=""
            className="w-[150px] object-cover"
          />
          <Link to={"/flash-sale"} className="pr-10 text-lg text-primary">
            Xem tất cả {">"}
          </Link>
        </div>
        <div className="grid grid-cols-2 mt-5 gap-x-5 md:grid-cols-4 lg:grid-cols-5">
          {books.slice(0, 5).map((item, index) => (
            <Link
              key={item.id}
              to={`/detail-book?id=${item.id}`}
              className={`block ${index >= 2 ? "hidden" : ""} md:block ${
                index >= 4 ? "md:hidden" : ""
              } lg:block`}
            >
              <BookCard book={item} isSold={true}></BookCard>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <CategoryProduct></CategoryProduct>
      </div>
      <div>
        <PurchaseTrending></PurchaseTrending>
      </div>
      <div>
        <PurchaseTrendingWeekly></PurchaseTrendingWeekly>
      </div>
      <div>
        <BrandHightlight header={true} title={suppliers}></BrandHightlight>
      </div>
      <div>
        <BrandHightlight header={false} title={suppliers1}></BrandHightlight>
      </div>

      <div>
        <ForeignBook title={cateforeign}></ForeignBook>
      </div>
    </div>
  );
};

export default HomePage;
