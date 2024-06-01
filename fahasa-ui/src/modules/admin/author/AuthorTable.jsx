import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteAuthor, getAll } from "../../../api/author";
import ActionDelete from "../../../components/action/ActionDelete";
import ActionEdit from "../../../components/action/ActionEdit";
import Table from "../../../components/table/Table";

const AuthorTable = () => {
  const [author, setAuthor] = useState([]);
  const navigate = useNavigate();
  const handleRemove = async (id) => {
    try {
      const response = await deleteAuthor(id);
      if (response.status === 200) {
        toast(response.data.message);
        const responseData = await getAll();
        setAuthor(responseData.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    try {
      const fetch = async () => {
        const response = await getAll();
        setAuthor(response.data.data);
      };
      fetch();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      {author && author.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {author.length > 0 &&
              author.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <img
                      src={item.image}
                      className="object-cover  rounded-lg w-[100px] h-[100px]"
                      alt=""
                    />
                  </td>
                  <td className="">
                    <div className="flex items-center gap-x-3">
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

export default AuthorTable;
