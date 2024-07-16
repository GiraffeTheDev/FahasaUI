import { useController } from "react-hook-form";

const Textarea = ({
  name = "",
  type = "text",
  children,
  control,
  placeholder,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="w-full">
      <textarea
        id={name}
        type={type}
        placeholder={placeholder}
        {...field}
        {...props}
        className="outline-none w-full border border-gray1 transition-all min-h-[200px] resize-none text-sm p-5 rounded-lg"
      />
    </div>
  );
};

export default Textarea;
