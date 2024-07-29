import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../../api/user";
import ActionView from "../../../components/action/ActionView";
import Loading from "../../../components/loading/Loading";
import Table from "../../../components/table/Table";
const title = [
  {
    id: 1,
    name: "Tên Người dùng",
  },
  {
    id: 2,
    name: "Email",
  },
  {
    id: 3,
    name: "Phone",
  },
  {
    id: 4,
    name: "Chức danh",
  },
  {
    id: 5,
    name: "Hành động",
  },
];
const UserTable = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      const response = await getAll();
      setUser(response.data.data);
    };
    fetch();
  }, []);
  return (
    <>
      {user && user.length > 0 ? (
        <Table>
          <thead className="bg-[#f7f7f8] ">
            <tr>
              {title.map((item) => (
                <td key={item.id} className="py-2 text-xl font-semibold">
                  {item.name}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {user.length > 0 &&
              user.map((item) => (
                <tr key={item.id}>
                  <td>{item?.name ? item.name : "Chưa cập nhật"}</td>
                  <td>{item.email}</td>
                  <td>{item.phone ? item.phone : "Chưa cập nhật"}</td>
                  <td>{item.isAdmin === 0 ? "Người dùng" : "Quản trị"}</td>
                  <td className="flex justify-center">
                    <ActionView
                      onClick={() =>
                        navigate(`/manage/update-user?id=${item.id}`)
                      }
                    ></ActionView>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <div className="flex items-center justify-center h-full">
          <Loading></Loading>
        </div>
      )}
    </>
  );
};

export default UserTable;
