import React from "react";

const Heading = ({ title = "" }) => {
  return <h3 className="px-3 py-5 text-2xl font-base">{title}</h3>;
};

export default Heading;
