import { useState } from "react";

export default function usePagination(inputData = [], itemsPerPage = 0) {
  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(inputData.length / itemsPerPage);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = inputData.slice(itemOffset, endOffset);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % inputData.length;
    setItemOffset(newOffset);
    window.scroll(0, 50);
  };
  return {
    pageCount,
    currentItems,
    handlePageClick,
  };
}
