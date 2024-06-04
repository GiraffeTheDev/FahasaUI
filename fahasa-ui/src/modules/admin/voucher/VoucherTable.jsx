import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteVoucher, getAll } from "../../../api/voucher";
import ActionDelete from "../../../components/action/ActionDelete";
import ActionEdit from "../../../components/action/ActionEdit";
import Table from "../../../components/table/Table";
import { convertTime } from "../../../utils/function";

const VoucherTable = () => {
  const [voucher, setVoucher] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      const response = await getAll();
      setVoucher(response.data.data);
    };
    fetch();
  }, []);
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
  return (
    <>
      {voucher && voucher.length > 0 ? (
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
            {voucher.length > 0 &&
              voucher.map((item) => (
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
      ) : (
        <div className="flex items-center justify-center h-full">
          loading...
        </div>
      )}
    </>
  );
};

export default VoucherTable;
