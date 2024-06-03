import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../../api/supplier";
import ActionDelete from "../../../components/action/ActionDelete";
import ActionEdit from "../../../components/action/ActionEdit";
import Table from "../../../components/table/Table";
const title = [
  {
    id: 1,
    name: "Tên thể loại",
  },
  {
    id: 2,
    name: "Ảnh bìa",
  },
  {
    id: 3,
    name: "Hành động",
  },
];
const SupplierTable = () => {
  const navigate = useNavigate();
  const handleRemove = (id) => {
    console.log(id);
  };
  const [supplier, setSupplier] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await getAll();
      setSupplier(response.data.data);
    };
    fetch();
  }, []);
  return (
    <>
      {supplier && supplier.length > 0 ? (
        <Table>
          <thead className="bg-[#f7f7f8] ">
            <tr>
              {title.map((item) => (
                <th key={item.id}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {supplier.length > 0 &&
              supplier.map((item) => (
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
                      <ActionEdit
                        onClick={() =>
                          navigate(`/manage/update-supplier?id=${item.id}`)
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

export default SupplierTable;
