import React from "react";
import { useSelector } from "react-redux";
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
    name: "Ảnh bìa",
  },
  {
    id: 3,
    name: "Hành động",
  },
];
const CategoryTable = () => {
  const navigate = useNavigate();
  const handleRemove = () => {
    console.log("remove");
  };

  const { category } = useSelector((state) => state.cate);
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

export default CategoryTable;
