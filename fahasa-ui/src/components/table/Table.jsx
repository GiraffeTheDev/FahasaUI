import React from "react";

const Table = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">{children}</table>
    </div>
  );
};

export default Table;
