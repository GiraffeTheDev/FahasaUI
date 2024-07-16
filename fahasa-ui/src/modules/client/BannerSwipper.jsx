import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { banners } from "../../utils/common";
const BannerSwipper = () => {
  return (
    <div className="lg:w-full lg:h-[350px] w-full md:w-[750px] h-[190px] md:h-[250px]">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        className="!w-full !h-full"
      >
        {banners.length > 0 &&
          banners.map((item) => (
            <SwiperSlide key={item.id} className="w-full h-full rounded-xl">
              <img src={item.url} alt="" className="w-full h-full rounded-xl" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default BannerSwipper;
