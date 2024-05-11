import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { banners } from "../../utils/common";
const BannerSwipper = () => {
  return (
    <div className="w-[800px] h-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        className="w-full h-full"
      >
        {banners.length > 0 &&
          banners.map((item) => (
            <SwiperSlide key={item.id} className="w-full h-full rounded-xl">
              <img
                src={item.url}
                alt=""
                className="object-cover w-full h-full rounded-xl"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default BannerSwipper;
