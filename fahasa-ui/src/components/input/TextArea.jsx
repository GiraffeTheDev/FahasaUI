import React from "react";
import { useController } from "react-hook-form";

const TextArea = (props) => {
  const { control, name, placeholder = "", ...rest } = props;
  const { field } = useController({ control, defaultValue: "", name });
  return (
    <textarea
      className="px-[25px] py-[15px] w-full text-sm font-medium bg-transparent border rounded-xl placeholder:text-text4 resize-none outline-none min-h-[140px]"
      placeholder={placeholder}
      {...field}
      {...rest}
    ></textarea>
  );
};

export default TextArea;
