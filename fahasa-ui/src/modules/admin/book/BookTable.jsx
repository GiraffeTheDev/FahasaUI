import React, { useEffect, useState } from "react";
import { getAll } from "../../../api/product";

const BookTable = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getAll();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  return <div></div>;
};

export default BookTable;
