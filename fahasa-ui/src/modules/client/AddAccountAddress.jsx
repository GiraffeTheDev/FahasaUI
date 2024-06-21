import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createUserInfor } from "../../api/userinfor";
import Button from "../../components/button/Button";
import GapRow from "../../components/common/GapRow";
import DropDown from "../../components/dropdown/DropDown";
import List from "../../components/dropdown/List";
import Options from "../../components/dropdown/Options";
import Select from "../../components/dropdown/Select";
import FormRow from "../../components/form/FormRow";
import Input from "../../components/input/Input";
import { Label } from "../../components/label";

const AddAccountAddress = () => {
  const { control, handleSubmit, setValue } = useForm({
    mode: "onSubmit",
  });
  const { user } = useSelector((state) => state.auth);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [nameProvince, setNameProvince] = useState("");
  const [nameDistrict, setNameDistrict] = useState("");
  const [nameWard, setNameWard] = useState("");
  useEffect(() => {
    // Fetch provinces
    fetch("https://esgoo.net/api-tinhthanh/1/0.htm")
      .then((response) => response.json())
      .then((data) => {
        if (data.error === 0) {
          setProvinces(data.data);
        }
      });
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      // Fetch districts
      fetch(`https://esgoo.net/api-tinhthanh/2/${selectedProvince}.htm`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error === 0) {
            setDistricts(data.data);
            setWards([]);
            setSelectedDistrict("");
          }
        });
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) {
      // Fetch wards
      fetch(`https://esgoo.net/api-tinhthanh/3/${selectedDistrict}.htm`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error === 0) {
            setWards(data.data);
          }
        });
    }
  }, [selectedDistrict]);
  const handleSelectProvince = (value) => {
    setSelectedProvince(value.id);
    setNameProvince(value.name);
    setValue("province", value.name);
  };
  const handleSelectDistrict = (value) => {
    setSelectedDistrict(value.id);
    setNameDistrict(value.name);
    setValue("district", value.name);
  };
  const handleSelectWard = (value) => {
    setSelectedWard(value.id);
    setNameWard(value.name);
    setValue("ward", value.name);
  };
  const hanldeUpdateInfo = async (value) => {
    try {
      const response = await createUserInfor({ ...value, user_id: user.id });
      if (!response.data.error) {
        toast("success");
      }
    } catch (error) {
      toast(error);
    }
  };
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit(hanldeUpdateInfo)}
        className="mt-5"
      >
        <div className="flex items-start gap-x-5">
          <div>
            <h1 className="mb-5 text-xl uppercase">Thông tin liên hệ</h1>
            <FormRow>
              <div className="w-[150px]">
                <Label htmlFor="user_name">Họ và tên</Label>
              </div>
              <div className="flex-1">
                <Input
                  control={control}
                  name={"user_name"}
                  placeholder={"Nhập họ và tên "}
                ></Input>
              </div>
            </FormRow>
            <GapRow></GapRow>
            <FormRow>
              <div className="w-[150px]">
                <Label htmlFor="phone">Số điện thoại</Label>
              </div>
              <div className="flex-1">
                <Input
                  control={control}
                  name={"phone"}
                  placeholder={"Nhập số điện thoại "}
                ></Input>
              </div>
            </FormRow>
          </div>
          <div>
            <h1 className="mb-5 text-xl uppercase">Địa chỉ</h1>
            <FormRow>
              <div className="flex-1">
                <Input
                  control={control}
                  name={"address_detail"}
                  placeholder={"Địa chỉ"}
                ></Input>
              </div>
            </FormRow>
            <GapRow></GapRow>
            <FormRow>
              <div className="w-[150px]">
                <Label htmlFor="province">Tỉnh/Thành phố</Label>
              </div>
              <div className="flex-1">
                <DropDown>
                  <Select
                    placeholder={
                      selectedProvince ? nameProvince : "Chọn Tỉnh/Thành Phố"
                    }
                  ></Select>
                  <List>
                    {provinces.length > 0 &&
                      provinces.map((item) => (
                        <Options
                          key={item.id}
                          onClick={() => handleSelectProvince(item)}
                        >
                          {item.name}
                        </Options>
                      ))}
                  </List>
                </DropDown>
              </div>
            </FormRow>
            <GapRow></GapRow>
            <FormRow>
              <div className="w-[150px]">
                <Label htmlFor="district">Quận/Huyện</Label>
              </div>
              <div className="flex-1">
                <DropDown>
                  <Select
                    placeholder={
                      selectedDistrict ? nameDistrict : "Chọn Quận/Huyện"
                    }
                    className={`${!selectedProvince ? "opacity-[0.5]" : ""}`}
                  ></Select>
                  <List>
                    {districts.length > 0 &&
                      districts.map((item) => (
                        <Options
                          key={item.id}
                          onClick={() => handleSelectDistrict(item)}
                        >
                          {item.name}
                        </Options>
                      ))}
                  </List>
                </DropDown>
              </div>
            </FormRow>
            <GapRow></GapRow>
            <FormRow>
              <div className="w-[150px]">
                <Label htmlFor="ward">Phường/Xã</Label>
              </div>
              <div className="flex-1">
                <DropDown>
                  <Select
                    placeholder={selectedWard ? nameWard : "Chọn Phường/Xã"}
                    className={`${!selectedDistrict ? "opacity-[0.5]" : ""}`}
                  ></Select>
                  <List>
                    {wards.length > 0 &&
                      wards.map((item) => (
                        <Options
                          key={item.id}
                          onClick={() => handleSelectWard(item)}
                        >
                          {item.name}
                        </Options>
                      ))}
                  </List>
                </DropDown>
              </div>
            </FormRow>
            <GapRow></GapRow>
          </div>
        </div>
        <Button kind="primary" type="submit">
          Lưu địa chỉ
        </Button>
      </form>
    </div>
  );
};

export default AddAccountAddress;
