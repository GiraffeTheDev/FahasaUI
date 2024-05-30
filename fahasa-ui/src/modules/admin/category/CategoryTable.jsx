import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../../api/category";
import ActionDelete from "../../../components/action/ActionDelete";
import ActionEdit from "../../../components/action/ActionEdit";
import Table from "../../../components/table/Table";
import { handleDeleteCategory } from "../../../redux/category/handlers";
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
const CategoryTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(handleDeleteCategory(id));
  };
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await getAll();
      setCategory(response.data.data);
    };
    fetch();
  }, []);
  return (
    <>
      {category && category.length > 0 ? (
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
            {category.length > 0 &&
              category.map((item) => (
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

export default CategoryTable;
