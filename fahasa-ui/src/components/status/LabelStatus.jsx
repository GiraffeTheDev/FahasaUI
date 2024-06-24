import React from "react";

const LabelStatus = ({ kind = "", title = "" }) => {
  let classNameLabel = "px-2 py-1 rounded-lg";
  switch (kind) {
    case "pending":
      classNameLabel += " bg-gray1 text-black";
      break;
    case "confirm":
      classNameLabel += " bg-success text-white ";
      break;
    case "delivery":
      classNameLabel += " bg-yellow1 text-white ";
      break;
    case "success":
      classNameLabel += " bg-success text-white  ";
      break;
    case "failed":
      classNameLabel += " bg-primary text-white ";
      break;
    default:
      break;
  }
  return <span className={classNameLabel}>{title}</span>;
};

export default LabelStatus;
