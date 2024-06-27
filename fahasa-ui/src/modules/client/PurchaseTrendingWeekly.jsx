import React, { useEffect, useState } from "react";
import { getBestBookWeekly } from "../../api/product";
import { formatNumber } from "../../utils/function";

const PurchaseTrendingWeekly = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getBestBookWeekly();
        setBook(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  return (
    <div className="mt-5">
      <div className="px-5 py-5 text-white bg-black rounded-tl-lg rounded-tr-lg">
        <h1>Bảng xếp hạng bán chạy tuần</h1>
      </div>
      <div className="flex items-start py-5 bg-white rounded-bl-lg rounded-br-lg">
        <div className="flex flex-col pr-3 basis-1/2 gap-y-5">
          {book.length > 0 &&
            book.slice(0, 5).map((item) => (
              <div key={item.id} className="flex items-start gap-x-2 h-[100px]">
                <div className="w-[150px] h-[100px] overflow-hidden">
                  <img
                    src={item.Book.image}
                    alt=""
                    className="object-contain w-full h-full overflow-hidden"
                  />
                </div>
                <div className="flex flex-col flex-1 h-full">
                  <span className="text-sm">{item.Book.name}</span>
                  <span className="text-xs">{item.Book.Author.name}</span>
                  <span className="mt-auto text-sm text-white bg-red-500 rounded-xl w-[200px] flex items-center justify-center">
                    Đã bán : {item.totalQuantity}
                  </span>
                </div>
              </div>
            ))}
        </div>
        <div className="w-[1px] h-[600px] bg-black basis-[2px]"></div>
        <div className="basis-49% flex-shrink-0">
          <div className="flex items-start gap-x-2">
            <div className="w-[150px] h-[150px]">
              <img
                src={book[0]?.Book.image}
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <h1 className="max-w-[300px]">{book[0]?.Book.name}</h1>
              <h1 className="line-through">
                {book[0]?.Book?.price === undefined
                  ? "NaN"
                  : formatNumber(book[0]?.Book?.price)}
                đ
              </h1>
              <h1 className="flex items-center gap-x-1">
                <span>
                  {book?.Book?.price === undefined
                    ? formatNumber(
                        book[0]?.Book?.price -
                          (book[0]?.Book?.price * book[0]?.Book?.discount) / 100
                      )
                    : formatNumber(
                        book[0]?.Book?.price -
                          (book[0]?.Book?.price * book[0]?.Book?.discount) / 100
                      )}
                  đ
                </span>
                <span className="px-2 py-1 text-sm bg-red-200 rounded-lg text-primary">
                  -{book[0]?.Book?.discount}%
                </span>
              </h1>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: book[0]?.Book.description
                ? book[0]?.Book.description
                : "",
            }}
            className=" px-5 mt-5 text-sm max-w-[600px]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseTrendingWeekly;
