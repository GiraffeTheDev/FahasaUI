import React from "react";
import Loading from "../../../components/loading/Loading";
import Table from "../../../components/table/Table";
import { formatNumber } from "../../../utils/function";
const title = [
  {
    id: 1,
    name: "Tên sản phẩm",
  },
  {
    id: 2,
    name: "Hình ảnh",
  },
  {
    id: 3,
    name: "Giá",
  },
  {
    id: 4,
    name: "Số lượng",
  },
  {
    id: 5,
    name: "Thành tiền",
  },
];
const OrderDetailTable = ({ data = [] }) => {
  return (
    <>
      {data.length > 0 ? (
        <Table>
          <thead className="bg-[#f7f7f8] ">
            <tr>
              {title.map((item) => (
                <th key={item.id}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item?.Book?.name}</td>
                  <td>
                    <img
                      src={item?.Book?.image}
                      alt=""
                      className="object-contain w-[80px] h-[80px]"
                    />
                  </td>
                  <td>{formatNumber(item?.price)}đ</td>
                  <td>{item?.quantity}</td>
                  <td>{formatNumber(item?.quantity * item?.price)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
};

export default OrderDetailTable;
