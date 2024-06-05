import React from "react";

const Toggle = (props) => {
  const { on, onClick, ...rest } = props;

  return (
    <label>
      <input
        type="checkbox"
        checked={on}
        onClick={onClick}
        className="hidden-input"
      />
      <div
        className={`inline-block border border-gray1 w-[50px] h-[30px] relative cursor-pointer rounded-full p-1 transition-all ${
          on ? "bg-primary" : "bg-gray-300"
        }`}
        {...rest}
      >
        <span
          className={`transition-all w-[20px] h-[20px] bg-white rounded-full inline-block ${
            on ? "translate-x-[22px]" : ""
          }`}
        ></span>
      </div>
    </label>
  );
};

export default Toggle;
