import React from "react";

const BookDescription = ({
  book,
  Supplier,
  Publisher,
  Author,
  description,
  page,
}) => {
  return (
    <div className="px-5 py-5 mt-5 bg-white rounded-lg">
      <h3 className="mb-5 text-xl font-semibold">Thông tin sản phẩm</h3>
      <div className="">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                  Mã hàng
                </th>
                <td scope="col" className="px-6 py-3">
                  {book.id}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tên nhà cung cấp
                </th>
                <td className="px-6 py-4"> {Supplier?.name}</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tác giả
                </th>
                <td className="px-6 py-4">{Author?.name}</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  NXB
                </th>
                <td className="px-6 py-4">{Publisher?.name}</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Trọng lượng
                </th>
                <td className="px-6 py-4"> 300</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Kích Thước Bao Bì
                </th>
                <td className="px-6 py-4"> 24 x 16 x 0.5 cm</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Số trang
                </th>
                <td className="px-6 py-4">{page}</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Hình thức
                </th>
                <td className="px-6 py-4"> Bìa mềm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên
          cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có
          thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển,
          phụ phí hàng cồng kềnh,...
        </p>
        <span className="text-primary">
          Chính sách khuyến mãi trên Fahasa.com không áp dụng cho Hệ thống Nhà
          sách Fahasa trên toàn quốc
        </span>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: description ? description : "",
        }}
        className="mt-5 text-sm"
      ></div>
    </div>
  );
};

export default BookDescription;
