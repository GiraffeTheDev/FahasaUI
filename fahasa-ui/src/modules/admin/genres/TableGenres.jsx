import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteGenres, getAllGenres } from "../../../api/genres";
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
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();
  const handleRemove = async (id) => {
    try {
      const response = await deleteGenres(id);
      if (response.status === 200) {
        toast(response.data.message);
        const responseData = await getAllGenres();
        setGenres(responseData.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    try {
      const fetch = async () => {
        const response = await getAllGenres();
        setGenres(response.data.data);
      };
      fetch();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      {genres && genres.length > 0 ? (
        <Table>
          <thead className="bg-[#f7f7f8] ">
            <tr>
              <th>Id</th>
              <th>Tên thể loại</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {genres.length > 0 &&
              genres.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <div className="flex items-center justify-center gap-x-3">
                      <ActionEdit
                        onClick={() =>
                          navigate(`/manage/update-category?id=${item.id}`)
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
