import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import BookCard from "../../../components/bookcard/BookCard";
const BookRecommend = ({ data = [] }) => {
  return (
    <div className="px-5 py-5 mt-5 bg-white rounded-lg">
      <h3 className="mb-5 text-xl font-semibold">Fahasa giới thiệu</h3>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },

          480: {
            slidesPerView: 2,
          },

          640: {
            slidesPerView: 3,
          },

          768: {
            slidesPerView: 4,
          },

          1024: {
            slidesPerView: 5,
          },
        }}
        autoplay
        className="w-full h-full"
      >
        {data.length > 0 &&
          data.map((item, index) => (
            <SwiperSlide key={uuidv4()} className="rounded-xl">
              <Link to={`/detail-book?id=${item.id}`}>
                <BookCard book={item}></BookCard>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default BookRecommend;
