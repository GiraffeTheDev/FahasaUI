import React, { useEffect, useState } from "react";
import { getBestBookWeekly } from "../../api/product";

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
        <div className="flex flex-col basis-1/2 gap-y-5">
          {book.length > 0 &&
            book.slice(0, 5).map((item) => (
              <div key={item.id} className="flex items-start gap-x-3">
                <div className="w-[150px] h-[100px]">
                  <img
                    src={item.Book.image}
                    alt=""
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h1>{item.Book.name}</h1>
                  <span>Đã bán : {item.totalQuantity}</span>
                </div>
              </div>
            ))}
        </div>
        <div className="basis-1/2"></div>
      </div>
    </div>
  );
};

export default PurchaseTrendingWeekly;
