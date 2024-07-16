import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllCommentWithProduct } from "../../../api/comment";
import StarComponent from "../../../components/star/StarComponent";
import { formartTime } from "../../../utils/function";

const ViewBookComment = () => {
  const [params] = useSearchParams();
  const id = params.get("id");
  const [comment, setComment] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await getAllCommentWithProduct(id);
      setComment(response.data.data);
    };
    fetch();
  }, [id]);
  return (
    <>
      <div className="flex flex-col p-5 bg-white rounded-bl-lg rounded-br-lg gap-y-3">
        {comment.length > 0
          ? comment.map((item) => (
              <div key={item.id} className="px-3">
                <div className="flex py-3 gap-x-3">
                  <div className="basis-[20%]">
                    <h1>{item?.name}</h1>
                    <span className="text-xs">
                      {formartTime(item?.createdAt)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <StarComponent></StarComponent>
                    <p className="mt-2 text-base">{item?.content}</p>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-gray1 mt-2"></div>
              </div>
            ))
          : "Chưa có bình luận nào về sản phẩm này"}
      </div>
    </>
  );
};

export default ViewBookComment;
