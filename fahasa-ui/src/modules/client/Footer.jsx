import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { suppliers } from "../../utils/common";

const Footer = () => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
  });
  const handleSendMail = (value) => {
    console.log(value);
  };
  return (
    <div>
      <div className="rounded-tl-lg rounded-tr-lg bg-gray2">
        <div className="flex items-center py-5 max-w-[900px] mx-auto justify-between gap-x-5">
          <div className="flex items-center gap-x-5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <h3 className="text-xl text-white uppercase">
              Đăng kí nhận bản tin
            </h3>
          </div>
          <div className={"bg-white px-3 py-1 rounded-lg flex-1 flex-shrink-0"}>
            <form
              action=""
              onSubmit={handleSubmit(handleSendMail)}
              className="flex items-center justify-between"
              autoComplete="off"
            >
              <Input
                control={control}
                name={"email"}
                placeholder={"Nhập địa chỉ email của bạn"}
                className={"border-none px-4 py-2  w-[400px] outline-none"}
              ></Input>
              <Button
                type="submit"
                kind={"primary"}
                className=" hover:bg-yellow-400"
              >
                Đăng kí
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="px-5 py-10 bg-white">
        <div className="flex items-start ">
          <div className="max-w-[400px]">
            <div>
              <img
                src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/logo.png"
                alt=""
              />
            </div>
            <p className="mt-5 text-xs leading-5">
              Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCMCông Ty Cổ Phần Phát Hành
              Sách TP HCM - FAHASA60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt
              NamFahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG
              hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất
              cả Hệ Thống Fahasa trên toàn quốc.
            </p>
          </div>
          <div className="flex-1">
            <div className="grid w-auto grid-cols-3 text-sm dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
              <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                <ul
                  className="space-y-4"
                  aria-labelledby="mega-menu-dropdown-button"
                >
                  <li>
                    <a
                      href="#"
                      className="font-semibold text-gray-500 uppercase dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Dịch vụ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Điều khoản sử dụng
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Chính sách bảo mật thông tin cá nhân
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Chính sách bảo mật thanh toán
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Giới thiệu Fahasa
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Hệ thống trung tâm - nhà sách
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="font-semibold uppercase dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Hỗ trợ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Chính sách đổi - trả - hoàn tiền
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Chính sách bảo hành - bồi hoàn
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Chính sách vận chuyển
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Chính sách khách sỉ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Phương thức thanh toán và xuất hóa đơn
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-4">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="font-semibold uppercase dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Tài khoản của tôi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Đăng nhập/Tạo mới tài khoản
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Thay đổi địa chỉ khách hàng
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Chi tiết tài khoản
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Lịch sử mua hàng
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {suppliers.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden max-w-[120px] flex items-center justify-center"
                >
                  <img src={item.url} className="object-contain h-[50px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="w-full mt-10 text-sm text-center text-gray">
          Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và Đầu
          tư Thành phố Hồ Chí Minh cấp ngày 20/12/2005, đăng ký thay đổi lần thứ
          10, ngày 20/05/2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
