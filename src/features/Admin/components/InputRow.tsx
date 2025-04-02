import Input from "@/components/atoms/Input";
import Typography from "@/components/atoms/Typography";

interface InputRowProps {
  name: string;
  title: string;
  placeholder: string;
}

const InputRow = ({ name, title, placeholder }: InputRowProps) => {
  return (
    <div className="flex items-center gap-5">
      <Typography.P2 className="w-[100px] text-right text-sm">
        {title}
      </Typography.P2>
      <div>
        <Input
          name={name}
          className="ml-[-10px] w-[300px] border-none outline-none placeholder:text-gray-400"
          placeholder={placeholder}
        />
        <div className="w-full border-b border-solid border-gray-300" />
      </div>
    </div>
  );
};

export default InputRow;
