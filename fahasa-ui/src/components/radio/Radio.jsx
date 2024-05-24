import { useController } from "react-hook-form";

const Radio = ({ checked, children, control, name, ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <label>
      <input
        onChange={() => {}}
        checked={checked}
        type="radio"
        className="hidden-input"
        {...field}
        {...rest}
      />
      <div className="flex items-center font-medium cursor-pointer gap-x-3">
        <div
          className={`w-5 h-5  border border-gray1 rounded-full flex items-center justify-center ${
            checked ? "  border-primary" : ""
          }`}
        >
          <div
            className={`w-3 h-3 rounded-full  ${
              checked ? "bg-primary" : "bg-white"
            }`}
          ></div>
        </div>
        <span className="flex items-center gap-x-2">{children}</span>
      </div>
    </label>
  );
};

export default Radio;
