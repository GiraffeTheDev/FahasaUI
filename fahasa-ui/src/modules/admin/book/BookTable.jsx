import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllBook, getAllBookSearch, removeBook } from "../../../api/product";
import ActionDelete from "../../../components/action/ActionDelete";
import ActionEdit from "../../../components/action/ActionEdit";
import Loading from "../../../components/loading/Loading";
import Table from "../../../components/table/Table";
import usePagination from "../../../hooks/usePagination";
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
    id: 5,
    name: "Hành động",
  },
];
const itemsPerPage = 4;
const BookTable = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

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
  const { pageCount, handlePageClick, currentItems } = usePagination(books, 5);
  const handleSearch = (e) => {
    setFilter(e.target.value);
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        if (!filter) {
          const response = await getAllBook();
          setBooks(response.data.data);
        } else {
          const response = await getAllBookSearch(filter);
          setBooks(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [filter]);
  return (
    <>
      <div className="flex mb-10 gap-x-10 max-w-[300px]">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Tìm kiếm sách"
            className="w-full px-5 py-3 text-black border rounded-lg outline-none border-primary"
            onChange={handleSearch}
          />
        </div>
      </div>
      {books && books.length > 0 ? (
        <>
          {books.length > 0 ? (
            <>
              {" "}
              <Table>
                <thead className="bg-[#f7f7f8] ">
                  <tr>
                    {title.map((item) => (
                      <th key={item.id}>{item.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentItems.length > 0 &&
                    currentItems.map((item) => (
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
              <div className="flex items-center justify-center mt-5">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                      />
                    </svg>
                  }
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                      />
                    </svg>
                  }
                  renderOnZeroPageCount={null}
                  className="flex items-center gap-x-5 pagination"
                />
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <Loading></Loading>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          <Loading></Loading>
        </div>
      )}
    </>
  );
};

export default BookTable;
