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
    id: 1,
    name: "Cty TNHH More Production Vietnam",
  },
  {
    id: 2,
    name: "AZ Việt Nam",
  },
  {
    id: 3,
    name: "Penguin Books",
  },
];
const suppliers2 = [
  {
    id: 1,
    name: "Penguin Books",
  },
  {
    id: 2,
    name: "FIRST NEWS",
  },
  {
    id: 3,
    name: "SkyBooks",
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
      <div className="flex w-full  gap-x-5 h-[350px]">
        <div className="w-[800px] h-full">
          <BannerSwipper></BannerSwipper>
        </div>
        <div className="flex flex-col w-full h-full gap-y-2">
          <div className="w-full rounded-lg">
            <img
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2024/Doitac_0624_Sub_392x156.jpg"
              alt=""
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full rounded-lg">
            <img
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2024/Sub_392x156.jpg"
              alt=""
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center mt-5 gap-x-2">
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
        className="p-5 mt-5 rounded-xl"
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
        <div className="grid grid-cols-5 mt-5 gap-x-5">
          {books.map((item) => (
            <Link key={item.id} to={`/detail-book?id=${item.id}`}>
              <BookCard book={item}></BookCard>
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
        <BrandHightlight header={false} title={suppliers2}></BrandHightlight>
      </div>
      <div>
        <ForeignBook title={cateforeign}></ForeignBook>
      </div>
    </div>
  );
};

export default HomePage;
