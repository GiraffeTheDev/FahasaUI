import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { getAllCommentExistProduct } from "../../../api/comment";
import ActionView from "../../../components/action/ActionView";
import Loading from "../../../components/loading/Loading";
import Table from "../../../components/table/Table";
import usePagination from "../../../hooks/usePagination";
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
    id: 5,
    name: "Hành động",
  },
];
const TableComment = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await getAllCommentExistProduct();
      setBooks(response.data.data);
    };
    fetch();
  }, []);
  const navigate = useNavigate();
  const { pageCount, handlePageClick, currentItems } = usePagination(books, 5);
  return (
    <>
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
                        <td>
                          <div className="flex items-center justify-center gap-x-3">
                            <ActionView
                              onClick={() =>
                                navigate(`/manage/comment-book?id=${item.id}`)
                              }
                            ></ActionView>
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

export default TableComment;
