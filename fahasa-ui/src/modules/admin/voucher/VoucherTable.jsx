import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import {
  deleteVoucher,
  getAll,
  getAllVoucherSearch,
} from "../../../api/voucher";
import ActionDelete from "../../../components/action/ActionDelete";
import ActionEdit from "../../../components/action/ActionEdit";
import Loading from "../../../components/loading/Loading";
import Table from "../../../components/table/Table";
import usePagination from "../../../hooks/usePagination";
import { convertTime } from "../../../utils/function";

const VoucherTable = () => {
  const [voucher, setVoucher] = useState([]);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();
  const { pageCount, handlePageClick, currentItems } = usePagination(
    voucher,
    5
  );
  const handleRemove = async (id) => {
    try {
      const response = await deleteVoucher(id);
      if (!response.data.error) {
        // toast(response.data.message);
        const voucher = await getAll();
        setVoucher(voucher.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        if (!filter) {
          const response = await getAll();
          setVoucher(response.data.data);
        } else {
          const response = await getAllVoucherSearch(filter);
          setVoucher(response.data.data);
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
            placeholder="Tìm kiếm mã giảm giá"
            className="w-full px-5 py-3 text-black border rounded-lg outline-none border-primary"
            onChange={handleSearch}
          />
        </div>
      </div>
      {voucher && voucher.length > 0 ? (
        <>
          {currentItems.length > 0 ? (
            <>
              <Table>
                <thead className="bg-[#f7f7f8] ">
                  <tr>
                    <th>Id</th>
                    <th>Mã voucher</th>
                    <th>Số lượng voucher</th>
                    <th>Phầm trăm giảm giá</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.length > 0 &&
                    currentItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.voucher_code}</td>
                        <td>{item.voucher_count}</td>
                        <td>{item.discount_percent}</td>
                        <td>{convertTime(item.start_date)}</td>
                        <td>{convertTime(item.end_date)}</td>
                        <td>
                          <div className="flex items-center justify-center gap-x-3">
                            <ActionEdit
                              onClick={() =>
                                navigate(`/manage/update-voucher?id=${item.id}`)
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

export default VoucherTable;
