import React from "react";
import { useController } from "react-hook-form";
import classNames from "../classname/className";

const Checkbox = ({
  checked = false,
  onClick = () => {},
  name = "",
  children,
  control,
}) => {
  const { field } = useController({ name, control, defaultValue: "" });
  return (
    <div className="flex flex-start gap-x-3">
      <div
        className={classNames(
          "inline-flex items-center justify-center w-5 h-5 border rounded cursor-pointer p-1 text-white",
          checked
            ? "bg-primary border-primary"
            : "border-gray1 bg-gray1 dark:border-text3"
        )}
        onClick={onClick}
      >
        <input
          type="checkbox"
          className="hidden"
          onChange={() => {}}
          name={name}
          ref={control}
          {...field}
        />
        <span className={`${checked ? "text-white1" : "opacity-0 invisible"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
      </div>
      {children && (
        <label onClick={onClick} className="font-medium text-text3">
          {children}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
