import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getBestBookWeekly } from "../../api/product";
import { formatNumber } from "../../utils/function";
const PurchaseTrendingWeekly = () => {
  const [book, setBook] = useState([]);
  const [hoveredBook, setHoveredBook] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getBestBookWeekly();
        setBook(response.data.data);
        setHoveredBook(response.data.data[0]);
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
      <div className="flex flex-col items-start py-5 bg-white rounded-bl-lg rounded-br-lg lg:flex-row">
        <div className="flex flex-col pr-3 w-full md:basis-[40%] gap-y-5">
          {book.length > 0 &&
            book.slice(0, 5).map((item) => (
              <div
                key={uuidv4()}
                className={`transition-all flex items-start gap-x-2 h-[100px]`}
                onMouseEnter={() => setHoveredBook(item)}
              >
                <div className="w-[150px] h-[100px] overflow-hidden">
                  <img
                    src={item?.Book?.image}
                    alt=""
                    className="object-contain w-full h-full overflow-hidden"
                  />
                </div>
                <div className="flex flex-col flex-1 h-full">
                  <span className="text-sm">{item?.Book?.name}</span>
                  <span className="text-xs">{item?.Book?.Author?.name}</span>
                  <span className="mt-auto text-sm text-white bg-red-500 rounded-xl w-[200px] flex items-center justify-center">
                    Đã bán : {item?.totalQuantity}
                  </span>
                </div>
                {hoveredBook === item && (
                  <div className="w-[2px] h-full bg-yellow1 rounded-lg"></div>
                )}
              </div>
            ))}
        </div>
        <div className="hidden lg:block w-[1px] md:h-[600px] bg-gray3 basis-[2px]"></div>
        <div className="h-[1px] bg-gray w-full mt-5 mb-5 lg:hidden"></div>
        <div className="hidden md:block basis-[59%] flex-shrink-0 pr-5">
          {hoveredBook && (
            <>
              <div className="flex items-start gap-x-2">
                <div className="w-[150px] h-[150px]">
                  <img
                    src={hoveredBook.Book.image}
                    alt=""
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h1 className="max-w-[300px]">{hoveredBook.Book.name}</h1>
                  <h1 className="line-through">
                    {hoveredBook.Book.price === undefined
                      ? "NaN"
                      : formatNumber(hoveredBook.Book.price)}
                    đ
                  </h1>
                  <h1 className="flex items-center gap-x-1">
                    <span>
                      {formatNumber(
                        hoveredBook.Book.price -
                          (hoveredBook.Book.price * hoveredBook.Book.discount) /
                            100
                      )}
                      đ
                    </span>
                    <span className="px-2 py-1 text-sm bg-red-200 rounded-lg text-primary">
                      -{hoveredBook.Book.discount}%
                    </span>
                  </h1>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: hoveredBook.Book.description
                    ? hoveredBook.Book.description
                    : "",
                }}
                className="truncated-text px-5 mt-5 text-sm max-w-[800px] text-justify"
              ></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PurchaseTrendingWeekly;
