import React, { useEffect, useState } from "react";
import { getAllnews } from "../../api/news";

const Notification = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await getAllnews();
      setNews(response.data.data);
    };
    fetch();
  }, []);
  return (
    <>
      <h1 className="text-xl uppercase">Thông báo sự kiện</h1>
      <div className="flex flex-col mt-2 gap-y-3 min-h-[100px]">
        {news.length > 0
          ? news.map((item) => (
              <div className="flex items-center gap-x-2" key={item.id}>
                <div className="w-[100px] h-[100px] rounded-lg">
                  <img
                    src={item.image}
                    className="object-cover w-full h-full rounded-lg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-start h-full gap-y-2">
                  <span>{item.title}</span>
                  <p className="custom-line">{item.content}</p>
                </div>
              </div>
            ))
          : "Không có thông báo nào"}
      </div>
    </>
  );
};

export default Notification;
