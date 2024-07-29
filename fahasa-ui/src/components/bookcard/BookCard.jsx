import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addToCart } from "../../redux/cart/slice";
import { formatNumber } from "../../utils/function";
import Button from "../button/Button";
const BookCard = ({ book, isCard, isSold = false, className = "" }) => {
  const dispatch = useDispatch();
  const handleAddtoCart = () => {
    dispatch(addToCart({ ...book, quantity: 1 }));
    Swal.fire({
      title: "Thêm vào giỏ hàng thành công",
      icon: "success",
    });
  };
  if (book?.price === undefined) return;
  return (
    <div
      className={`border border-gray1 flex flex-col h-full justify-center pb-4 p-2 bg-white rounded-lg ${className}`}
    >
      <div className="flex mb-1 items-center h-[200px] justify-center w-full overflow-hidden bg-transparent">
        <img
          src={book?.image}
          alt=""
          className="object-cover h-auto max-h-[190px] w-[190px]"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="mt-2 mb-1 mr-2 text-sm custom-line">{book?.name}</h3>
        <div className="flex items-center mt-auto gap-x-2">
          <span className="text-base font-bold text-red-500 ">
            {formatNumber(book?.price - book?.price * (book?.discount / 100))} đ
          </span>
          {book?.sale ? (
            <span className="p-1 text-xs text-white rounded-lg bg-primary">
              {"-"}
              {book?.discount}
              {"%"}
            </span>
          ) : (
            ""
          )}
        </div>
        <h3 className="mb-2 text-sm line-through">
          {formatNumber(book?.price)} đ
        </h3>
        {isSold ? (
          <div className="relative hidden h-4 mt-2 mb-2 text-center bg-red-200 rounded-full lg:block dark:bg-gray-700">
            <div
              className="absolute inset-0 min-w-[10px] w-full h-full bg-red-500 rounded-tl-full rounded-bl-full z-5"
              style={{ width: (book?.sold / book?.stock) * 100 }}
            />{" "}
            <h3 className="absolute w-full text-sm text-center text-white z-9">
              Đã bán {book?.stock === 0 ? "Bán hết" : book?.sold}
            </h3>
          </div>
        ) : (
          ""
        )}
        {isCard ? (
          <Button type="button" kind={"semi"} onClick={handleAddtoCart}>
            Thêm giỏ hàng
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BookCard;
