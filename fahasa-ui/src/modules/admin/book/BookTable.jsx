import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllBook, removeBook } from "../../../api/product";
import ActionDelete from "../../../components/action/ActionDelete";
import ActionEdit from "../../../components/action/ActionEdit";
import Table from "../../../components/table/Table";
import { formatNumber } from "../../../utils/function";
const title = [
  {
    id: 1,
    name: "Tên sách",
  },
  {
    id: 2,
    name: "Ảnh bìa",
  },
  {
    id: 3,
    name: "Giá",
  },
  {
    id: 4,
    name: "Khuyến mãi",
  },
  {
    id: 3,
    name: "Hành động",
  },
];
const BookTable = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getAllBook();
        console.log(response);
        setBooks(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  const handleRemove = async (id) => {
    try {
      const response = await removeBook(id);
      if (!response.data.error) {
        toast(response.data.message);
        const books = await getAllBook();
        setBooks(books.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {books && books.length > 0 ? (
        <Table>
          <thead className="bg-[#f7f7f8] ">
            <tr>
              {title.map((item) => (
                <th key={item.id}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {books.length > 0 &&
              books.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td className="flex items-center justify-center">
                    <img
                      src={item.image}
                      className="object-cover rounded-lg w-[100px] h-[100px]"
                      alt=""
                    />
                  </td>
                  <td>{formatNumber(item.price)}</td>
                  <td>
                    <span className="flex items-start justify-center">
                      {" "}
                      {item.sale ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-green-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-primary"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                    </span>
                  </td>
                  <td className="">
                    <div className="flex items-center justify-center gap-x-3">
                      <ActionEdit
                        onClick={() =>
                          navigate(`/manage/update-book?id=${item.id}`)
                        }
                      ></ActionEdit>
                      <ActionDelete
                        onClick={() => handleRemove(item.id)}
                      ></ActionDelete>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <div className="flex items-center justify-center h-full">
          loading...
        </div>
      )}
    </>
  );
};

export default BookTable;
