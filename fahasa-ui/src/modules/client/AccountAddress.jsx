import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserInfor } from "../../api/userinfor";
import Button from "../../components/button/Button";

const AccountAddress = () => {
  const [infor, setInfor] = useState([]);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    const fetch = async () => {
      const response = await getUserInfor(user.id);
      setInfor(response.data.data);
    };
    fetch();
  }, [user.id]);
  if (!infor) return null;
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl uppercase">Số địa chỉ</h1>
        <Button type="button" kind="primary" href="/new/account-address">
          Thêm địa chỉ mới
        </Button>
      </div>
      <div className="flex items-start justify-between mt-5">
        <div className="basis-1/2">
          <h1 className="text-xl uppercase">Địa chỉ mặc định</h1>
          <div className="flex flex-col pl-2">
            <span className="font-semibold">Địa chỉ thanh toán mặc định</span>
            <div className="flex flex-col mt-2 text-sm gap-y-2">
              <h1>{infor[0]?.user_name}</h1>
              <h1>{infor[0]?.address_detail}</h1>
              <span>
                Xã {infor[0]?.ward} - Huyện {infor[0]?.district} - Tỉnh{" "}
                {infor[0]?.province}
              </span>
              <h1>Tel : {infor[0]?.phone}</h1>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <h1 className="text-xl uppercase">Địa chỉ khác</h1>
          {infor.length > 0 &&
            infor.slice(1).map((item) => (
              <div className="flex flex-col mt-2 text-sm gap-y-2" key={item.id}>
                <h1>{item?.user_name}</h1>
                <h1>{item?.address_detail}</h1>
                <span>
                  Xã {item?.ward} - Huyện {item?.district} - Tỉnh{" "}
                  {item?.province}
                </span>
                <h1>Tel : {item?.phone}</h1>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AccountAddress;
