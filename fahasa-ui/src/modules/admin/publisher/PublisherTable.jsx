import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  deletePublisher,
  getAllPublisher,
  getAllPublisherBySearch,
} from "../../../api/publisher";
import ActionDelete from "../../../components/action/ActionDelete";
import ActionEdit from "../../../components/action/ActionEdit";
import Table from "../../../components/table/Table";
import usePagination from "../../../hooks/usePagination";
const title = [
  {
    id: 1,
    name: "Tên nhà xuất bản",
  },
  {
    id: 2,
    name: "Hành động",
  },
];
const itemsPerPage = 5;
const PublisherTable = () => {
  const [publisher, setPublisher] = useState([]);
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const handleRemove = async (id) => {
    try {
      const response = await deletePublisher(id);
      if (response.status === 200) {
        Swal.fire("Xóa thành công");
        const responseData = await getAllPublisher();
        setPublisher(responseData.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { pageCount, handlePageClick, currentItems } = usePagination(
    publisher,
    5
  );
  useEffect(() => {
    const fetch = async () => {
      try {
        if (!filter) {
          const response = await getAllPublisher();
          setPublisher(response.data.data);
        } else {
          const response = await getAllPublisherBySearch(filter);
          setPublisher(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [filter]);
  const handleSearch = (e) => {
    setFilter(e.target.value);
  };
  return (
    <>
      <div className="flex mb-10 gap-x-10 max-w-[300px]">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Tìm kiếm nhà xuất bản"
            className="w-full px-5 py-3 text-black border rounded-lg outline-none border-primary"
            onChange={handleSearch}
          />
        </div>
      </div>
      {publisher && publisher.length > 0 ? (
        <>
          {currentItems.length > 0 ? (
            <>
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
                        <td className="">
                          <div className="flex items-center justify-center gap-x-3">
                            <ActionEdit
                              onClick={() =>
                                navigate(
                                  `/manage/update-publisher?id=${item.id}`
                                )
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
              loading...
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          Không có dữ liệu
        </div>
      )}
    </>
  );
};

export default PublisherTable;
