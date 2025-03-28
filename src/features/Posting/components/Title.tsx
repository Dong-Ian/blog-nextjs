import Input from "@/components/atoms/Input";

const Title = () => {
  return (
    <div>
      <div className="mb-8">
        <Input
          name="title"
          placeholder="제목을 입력하세요"
          className="ml-[-15px] w-4/5 border-none text-[30px] font-bold outline-none placeholder:text-gray-500"
        />
        <div className="border-b" />
      </div>
    </div>
  );
};

export default Title;
