import PropTypes from "prop-types";
import React from "react";

import { Link } from "react-router-dom";
import classNames from "../classname/className";
const Button = ({
  children,
  className = "",
  type = "button",
  disabled = false,
  isLoading = false,

  ...rest
}) => {
  let classNameButton =
    "flex items-center justify-center rounded-xl px-4 py-2 rounded-[10px] font-base";
  switch (rest.kind) {
    case "primary":
      classNameButton += " bg-primary text-white";
      break;
    case "secondary":
      classNameButton += " bg-gray text-black ";
      break;
    case "ghost":
      classNameButton += " bg-blue1 text-white ";
      break;
    case "semi":
      classNameButton +=
        " bg-white text-primary font-semibold border border-primary ";
      break;
    default:
      break;
  }
  const child = !!isLoading ? (
    <div className="w-10 h-10 p-4 border-4 border-white border-t-transparent animate-spin"></div>
  ) : (
    children
  );
  if (rest.href)
    return (
      <Link to={rest.href} className={classNames(classNameButton, className)}>
        {child}
      </Link>
    );

  return (
    <button
      type={type}
      className={classNames(
        classNameButton,
        !!isLoading ? "opacity-50 pointer-events-none" : "",
        className
      )}
      {...rest}
      disabled={disabled}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
};
export default Button;
