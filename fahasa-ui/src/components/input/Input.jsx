import PropTypes from "prop-types";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import { useController } from "react-hook-form";
import classNames from "../classname/className";
import ErrorComponent from "../common/ErrorComponent";

const Input = (props) => {
  const {
    control,
    name,
    type = "",
    children,
    error = "",
    placeholder = "",
    maxLength = 6,
    ...rest
  } = props;
  const { field } = useController({ name, control, defaultValue: "" });

  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={classNames(
          "w-full border-gray1 px-3 py-2 text-sm font-medium transition-all border rounded-lg outline-none bg-transparent placeholder:text-text4 dark:border-darkStroke dark:placeholder:text-text2 dark:text-white",
          error.length > 0 ? "border-error" : "border-strock",
          children ? "pr-16" : ""
        )}
        maxLength={maxLength}
        placeholder={`${error.length <= 0 ? placeholder : ""}`}
        {...field}
        {...rest}
      />
      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none top-2/4 -translate-y-2/4 text-error left-6 error-input">
          {error}
        </span>
      )}
      {children && (
        <div className="absolute cursor-pointer select-none top-2/4 -translate-y-2/4 right-6">
          {children}
        </div>
      )}
    </div>
  );
};
Input.propTypes = {
  //any : bất kì
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
