import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    name: "Hành động",
  },
];
const TableGenres = () => {
  const [genres, setGenres] = useState([{ id: 1, name: "Thiếu nhi" }]);
  const navigate = useNavigate();
  const handleRemove = () => {
    console.log("remove");
  };
  return (
    <>
      {genres && genres.length > 0 ? (
        <Table>
          <thead className="bg-[#f7f7f8] ">
            <tr className="flex px-5 py-5 gap-x-10">
              {title.map((item) => (
                <th key={item.id}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {genres.length > 0 &&
              genres.map((item) => (
                <tr key={item.id} className="flex justify-between mt-5">
                  <td>{item.name}</td>
                  <td className="">
                    <div className="flex items-center gap-x-3">
                      <ActionEdit
                        onClick={() =>
                          navigate(`/manage/update-genres?id=${item.id}`)
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

export default TableGenres;
