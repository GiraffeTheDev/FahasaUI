import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { getBooksWithCategory, getOne } from "../api/product";
import BookCard from "../components/bookcard/BookCard";
import Button from "../components/button/Button";
import { addToCart } from "../redux/cart/slice";
import { formatNumber } from "../utils/function";
const BookDetailPage = () => {
  const [book, setBook] = useState({});
  const [params] = useSearchParams();
  const id = params.get("id");
  const [sameBook, setSameBook] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      const response = await getOne(id);
      setBook(response.data.data);
      const bookCateogory = await getBooksWithCategory(
        book.category_id ? book.category_id : book.category_id
      );
      setSameBook(bookCateogory.data.data);
    };
    fetch();
  }, [id, book.category_id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [book]);
  const handleAddToCart = () => {
    if (dispatch(addToCart({ ...book, quantity }))) {
      Swal.fire({
        title: "Thêm vào giỏ hàng thành công",
        icon: "success",
        confirmButtonColor: "#C40C0C",
      });
    }
  };
  useEffect(() => {
    document.title = book.name;
  }, [book]);
  if (!book) return null;
  const {
    image,
    name,
    price,
    discount,
    page,
    description,
    Author,
    Supplier,
    Publisher,
  } = book;

  return (
    <>
      {book ? (
        <>
          {" "}
          <div className="flex px-5 py-3 mt-5 bg-white rounded-lg gap-x-[80px]">
            <div className=" w-[400px]">
              <img
                src={image}
                alt=""
                className="w-full h-[390px] object-contain"
              />
              <div className="flex items-center mt-5 gap-x-5">
                <Button type="button" kind={"semi"} onClick={handleAddToCart}>
                  Thêm vào giỏ hàng
                </Button>
                <Button
                  type="button"
                  kind={"primary"}
                  className="flex-1"
                  onClick={handleAddToCart}
                >
                  Mua ngay
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-base">{name}</h3>
              <div className="flex items-center justify-between max-w-[70%] mt-5">
                <span>
                  Nhà cung cấp:{" "}
                  <span className="text-blue1">{Supplier?.name}</span>
                </span>
                <span>
                  Tác giả: <span className="font-semibold">{Author?.name}</span>
                </span>
              </div>
              <div className="flex items-center max-w-[70%] mt-2 justify-between">
                <span>
                  Nhà xuất bản:
                  <span className="font-semibold">{Publisher?.name}</span>
                </span>
                <span>
                  Hình thức bìa: <span className="font-semibold">Bìa Mềm</span>
                </span>
              </div>
              <div className="flex items-center mt-2 gap-x-1">
                {Array(5)
                  .fill(0)
                  .map(() => (
                    <span key={uuidv4()}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </span>
                  ))}
              </div>
              <div className="flex items-center mt-5 gap-x-3">
                <span className="text-4xl font-bold text-primary">
                  {price === undefined
                    ? "un"
                    : formatNumber(price - (price * discount) / 100)}{" "}
                  đ
                </span>
                <span className="line-through">
                  {price === undefined ? "un" : formatNumber(price)} đ
                </span>
                <span className="px-2 py-1 text-white rounded-lg bg-primary">
                  -{discount}%
                </span>
              </div>
              <div className="flex items-center mt-2 gap-x-3">
                <span className="text-lg font-base">Số lượng :</span>
                <div className="flex items-center px-2 py-1 gap-x-2 max-w-[6rem] justify-center border-gray2 border  rounded-lg ">
                  <span
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                    className="cursor-pointer "
                  >
                    -
                  </span>
                  <span className="px-2 select-none">{quantity}</span>
                  <span
                    onClick={() => setQuantity(quantity + 1)}
                    className="cursor-pointer "
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 py-5 mt-5 bg-white rounded-lg">
            <h3 className="mb-5 text-xl font-semibold">Fahasa giới thiệu</h3>
            <Swiper
              spaceBetween={10}
              slidesPerView={5}
              autoplay
              className="w-full h-full"
            >
              {sameBook.length > 0 &&
                sameBook.map((item) => (
                  <SwiperSlide key={uuidv4()} className="rounded-xl">
                    <Link to={`/detail-book?id=${item.id}`}>
                      {" "}
                      <BookCard book={item}></BookCard>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="px-5 py-5 mt-5 bg-white rounded-lg">
            <h3 className="mb-5 text-xl font-semibold">Thông tin sản phẩm</h3>
            <div className="">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 rounded-s-lg">
                        Mã hàng
                      </th>
                      <td scope="col" className="px-6 py-3">
                        {book.id}
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Tên nhà cung cấp
                      </th>
                      <td className="px-6 py-4"> {Supplier?.name}</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Tác giả
                      </th>
                      <td className="px-6 py-4">{Author?.name}</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NXB
                      </th>
                      <td className="px-6 py-4"> NXB Thanh Niên</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Trọng lượng
                      </th>
                      <td className="px-6 py-4"> 300</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Kích Thước Bao Bì
                      </th>
                      <td className="px-6 py-4"> 24 x 16 x 0.5 cm</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Số trang
                      </th>
                      <td className="px-6 py-4">{page}</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Hình thức
                      </th>
                      <td className="px-6 py-4"> Bìa mềm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện
                hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ
                giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng
                gói, phí vận chuyển, phụ phí hàng cồng kềnh,...
              </p>
              <span className="text-primary">
                Chính sách khuyến mãi trên Fahasa.com không áp dụng cho Hệ thống
                Nhà sách Fahasa trên toàn quốc
              </span>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: description ? description : "",
              }}
              className="mt-5 text-sm"
            ></div>
          </div>
        </>
      ) : (
        "khong co du lieu"
      )}
    </>
  );
};

export default BookDetailPage;
