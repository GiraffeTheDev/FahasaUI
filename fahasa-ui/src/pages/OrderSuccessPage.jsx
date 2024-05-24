import React from "react";
import Button from "../components/button/Button";

const OrderSuccessPage = () => {
  return (
    <>
      <div className="flex items-center justify-center px-5 py-5 mt-5 bg-white rounded-lg">
        <div>
          <h3 className="w-full text-3xl font-semibold text-center text-success">
            Đơn hàng của bạn đã được tiếp nhận
          </h3>
          <div className="mt-3 mb-5">
            <h4 className="w-full text-center">
              Cảm ơn bạn đã mua hàng tại Fahasa.com
            </h4>
            <h4 className="w-full text-center">
              Mã đơn hàng của bạn là :{" "}
              <span className="text-yellow1">#1003232342</span>
            </h4>
            <h4 className="w-full text-center">
              Bạn sẽ sớm nhận được email xác nhận đơn hàng từ chúng tôi
            </h4>
          </div>
          <Button href={"/flash-sale"} type="button" kind={"primary"}>
            Tiếp tục mua sắm
          </Button>
        </div>
      </div>
    </>
  );
};

export default OrderSuccessPage;
