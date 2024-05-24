import React from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/bookcard/BookCard";
import BannerSwipper from "../modules/client/BannerSwipper";
import CategoryProduct from "../modules/client/CategoryProduct";
import PurchaseTrending from "../modules/client/PurchaseTrending";
import { bannerSmall } from "../utils/common";

const HomePage = () => {
  return (
    <div className="mt-4">
      <div className="flex w-full  gap-x-5 h-[350px]">
        <div className="w-[800px] h-full">
          <BannerSwipper></BannerSwipper>
        </div>
        <div className="flex flex-col w-full h-full gap-y-2">
          <div className="w-full rounded-lg">
            <img
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2024/392x156_zalopay_t5.jpg"
              alt=""
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full rounded-lg">
            <img
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2024/KoTienMat_T424_Sub_392x156.jpg"
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
        className="p-5 "
      >
        <div className="flex justify-between px-2 py-5 bg-white rounded-lg">
          <img
            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/flashsale/label-flashsale.svg?q="
            alt=""
            className="w-[150px] object-cover"
          />
        </div>
        <div className="flex items-center mt-5 gap-x-5">
          {Array(5)
            .fill(0)
            .map((item) => (
              <BookCard key={item}></BookCard>
            ))}
        </div>
      </div>

      <div>
        <CategoryProduct></CategoryProduct>
      </div>
      <div>
        <PurchaseTrending></PurchaseTrending>
      </div>
    </div>
  );
};

export default HomePage;
