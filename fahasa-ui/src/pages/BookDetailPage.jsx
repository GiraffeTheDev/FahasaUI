import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

import { deleteComment, getAllCommentWithProduct } from "../api/comment";
import { getPurchasedBook } from "../api/order";
import { getBooksWithCategoryVi, getOne } from "../api/product";
import Button from "../components/button/Button";
import Like from "../components/icon/Like";
import Pen from "../components/icon/Pen";
import Warning from "../components/icon/Warning";
import StarComponent from "../components/star/StarComponent";
import useToggleValue from "../hooks/useToggleValue";
import BookDescription from "../modules/client/book/BookDescription";
import BookRecommend from "../modules/client/book/BookRecommend";
import SoldOut from "../modules/client/book/SoldOut";
import Breadcrumb from "../modules/client/Breadcrumb";
import ModelComment from "../modules/client/ModelComment";
import { addToCart } from "../redux/cart/slice";
import { formartTime, formatNumber } from "../utils/function";
const BookDetailPage = () => {
  const [book, setBook] = useState({});
  const [params] = useSearchParams();
  const id = params.get("id");
  const [sameBook, setSameBook] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [comment, setComment] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const { value, handleToggleValue } = useToggleValue();
  const [purchased, setPurchased] = useState(null);
  const navigate = useNavigate();
  const handleDeleteComment = async (id) => {
    try {
      const response = await deleteComment(id);
      if (!response.data.error) {
        const comment = await getAllCommentWithProduct(id);
        Swal.fire({
          title: "Xóa thành công",
        });
        setComment(comment.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await getOne(id);
      setBook(response.data.data);
      const bookCateogory = await getBooksWithCategoryVi(
        book.category_id ? book.category_id : book.category_id
      );
      const commentData = await getAllCommentWithProduct(id);
      const data = {
        user_id: user?.id,
        book_id: id,
      };
      const purbook = await getPurchasedBook(data);
      setPurchased(purbook?.data?.purchased);
      setComment(commentData.data.data);
      setSameBook(bookCateogory.data.data);
    };
    fetch();
  }, [id, book.category_id, value, user?.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = book.name;
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
  const handleAddToCartNow = () => {
    if (dispatch(addToCart({ ...book, quantity }))) {
      Swal.fire({
        title: "Thêm vào giỏ hàng thành công",
        icon: "success",
        confirmButtonColor: "#C40C0C",
      });
      navigate("/cart");
    }
  };
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
    Category,
    Genres,
  } = book;
  return (
    <>
      {book ? (
        <div className="relative">
          <div className="fixed bottom-0 z-50 flex items-center w-[390px] justify-center md:w-[750px] py-5 mx-auto bg-white shadow-xl lg:hidden">
            <div className="flex mx-auto md:w-[700px] w-[350px]">
              <div className="flex items-center rounded-lg px-2 py-2 gap-x-2 max-w-[6rem] justify-center border-gray2 border ">
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
              <Button
                type="button"
                kind={"semi"}
                onClick={handleAddToCart}
                disabled={book.stock <= 0 ? true : false}
                className={`rounded-none flex-shrink-0 ${
                  book.stock <= 0 ? "opacity-[0.5]" : ""
                }`}
              >
                Thêm vào giỏ hàng
              </Button>
              <Button
                type="button"
                kind={"primary"}
                disabled={book.stock <= 0 ? true : false}
                className={`flex-1 rounded-none flex-shrink-0 ${
                  book.stock <= 0 ? "opacity-[0.5]" : ""
                }`}
                onClick={handleAddToCart}
              >
                Mua
              </Button>
            </div>
          </div>
          <Breadcrumb
            type={Category?.type}
            category={Category?.name}
            genres={Genres?.name}
          ></Breadcrumb>
          <div className="flex lg:flex-row flex-col px-5 py-3 mt-5 bg-white rounded-lg gap-x-[80px]">
            <div className="w-full flex justify-center flex-col lg:w-[400px]">
              <img
                src={image}
                alt=""
                className="w-full h-[390px] object-contain"
              />
              <div className="items-center hidden mt-5 lg:flex gap-x-5">
                <Button
                  type="button"
                  kind={"semi"}
                  onClick={handleAddToCart}
                  disabled={book.stock <= 0 ? true : false}
                  className={`${book.stock <= 0 ? "opacity-[0.5]" : ""}`}
                >
                  Thêm vào giỏ hàng
                </Button>
                <Button
                  type="button"
                  kind={"primary"}
                  disabled={book.stock <= 0 ? true : false}
                  className={`flex-1 ${book.stock <= 0 ? "opacity-[0.5]" : ""}`}
                  onClick={handleAddToCartNow}
                >
                  Mua ngay
                </Button>
              </div>
            </div>
            <div className="flex-1 mt-5 lg:mt-0">
              <h3 className="text-xl font-base">{name}</h3>
              <div className="flex items-center justify-between mt-5">
                <span className="">Nhà cung cấp: {Supplier?.name}</span>
                <span>Tác giả:{Author?.name}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="">
                  Nhà xuất bản:
                  {Publisher?.name}
                </span>
                <span>Hình thức bìa: Bìa Mềm</span>
              </div>
              <StarComponent></StarComponent>
              <div className="flex items-center mt-5 gap-x-3">
                <span className="text-4xl font-semibold text-primary">
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
              {book?.stock > 0 ? (
                <div className="items-center hidden mt-2 lg:flex gap-x-3">
                  <span className="text-lg font-base">Số lượng :</span>
                  <div className="flex items-center px-2 py-1 gap-x-2 max-w-[6rem] justify-center border-gray2 border  rounded-lg ">
                    <span
                      onClick={() =>
                        setQuantity(quantity > 1 ? quantity - 1 : 1)
                      }
                      className="cursor-pointer "
                    >
                      -
                    </span>
                    <span className="px-2 select-none">{quantity}</span>
                    <span
                      onClick={
                        quantity > book?.stock
                          ? ""
                          : () => setQuantity(quantity + 1)
                      }
                      className="cursor-pointer "
                    >
                      +
                    </span>
                  </div>
                  <span className="text-primary">
                    {quantity > book?.stock
                      ? "Số lượng sản phẩm bạn chọn lớn hơn số lượng tồn kho"
                      : ""}
                  </span>
                </div>
              ) : (
                <SoldOut></SoldOut>
              )}
              {book.discount >= 30 && book?.sold > 0 ? (
                <div
                  className="relative w-[400px] flex items-center gap-x-5 h-[50px] rounded-lg mt-5 px-5"
                  style={{
                    background: `url("https://cdn0.fahasa.com/media/fahasa_web_image/banner.jpg")`,
                  }}
                >
                  <img
                    src="https://cdn0.fahasa.com/media/fahasa_web_image/thunder.jpg"
                    alt=""
                    className="w-[180px] object-cover"
                  />
                  {book?.sold > 0 ? (
                    <div className="relative w-[300px] h-4 text-center bg-red-200 rounded-full">
                      <div
                        className="absolute inset-0 h-full bg-white rounded-full z-5"
                        style={{ width: (book?.sold / book?.stock) * 100 }}
                      />{" "}
                      <h3 className="absolute w-full text-sm text-center text-white z-9">
                        Đã bán {book?.stock === 0 ? "Bán hết" : book?.sold}
                      </h3>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <BookRecommend data={sameBook}></BookRecommend>
          <BookDescription
            Author={Author}
            description={description}
            book={book}
            page={page}
            Supplier={Supplier}
            Publisher={Publisher}
          ></BookDescription>
          <div className="flex items-center justify-center p-5 mt-5 bg-white rounded-tl-lg rounded-tr-lg">
            {purchased ? (
              <Button
                kind="semi"
                type="button"
                className="flex items-center gap-x-2"
                onClick={handleToggleValue}
              >
                <Pen></Pen>
                Viết đánh giá
              </Button>
            ) : (
              ""
            )}
            <ModelComment
              show={value}
              handleClose={handleToggleValue}
              id={id}
              user_id={user?.id}
            ></ModelComment>
          </div>
          <div className="h-[1px] w-full bg-gray1"></div>
          <div className="flex flex-col p-5 bg-white rounded-bl-lg rounded-br-lg gap-y-3">
            {comment.length > 0
              ? comment.map((item) => (
                  <div key={item.id} className="flex gap-x-3">
                    <div className="basis-[20%]">
                      <h1>{item?.user_id === user?.id ? "Tôi" : item?.name}</h1>
                      <span className="text-xs">
                        {formartTime(item?.createdAt)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <StarComponent></StarComponent>
                      <p className="mt-2 text-base">{item?.content}</p>
                      <div className="flex items-center mt-5 text-xs gap-x-5">
                        <div className="flex items-center gap-x-2">
                          <Like></Like>
                          <span>Thích (7)</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <Warning></Warning>
                          <span>Báo cáo</span>
                        </div>
                        <span
                          className="cursor-pointer text-primary"
                          onClick={() => handleDeleteComment(item.id)}
                        >
                          {item.user_id === user?.id
                            ? "Xóa bình luận của bạn"
                            : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              : "Chưa có bình luận nào về sản phẩm này"}
          </div>
        </div>
      ) : (
        "Không có dữ liệu"
      )}
    </>
  );
};

export default BookDetailPage;
