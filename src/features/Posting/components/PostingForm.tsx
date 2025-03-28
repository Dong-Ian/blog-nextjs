"use client";

import Button from "@/components/atoms/Button";
import Editor from "@/components/atoms/Editor";
import Input from "@/components/atoms/Input";
import BackButton from "@/components/molecules/BackButton";

import { FormProvider, useForm } from "react-hook-form";
import TagList from "./TagList";

interface PostingInterface {
  title: string;
  category: string;
  tags: string[];
  contents: string;
}

interface PostingFromInterface {
  categoryList: string[];
}
const PostingForm: React.FC<PostingFromInterface> = ({ categoryList }) => {
  const methods = useForm<PostingInterface>();

  const handleFormSubmit = (data: PostingInterface) => {
    console.table(data);
  };

  return (
    <div className="mb-[80px] mt-[30px] w-[90%] max-w-[1400px]">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <div className="flex w-full justify-between">
            <BackButton />
            <Button.Default
              type="submit"
              className="rounded-full border-black font-bold hover:bg-black hover:text-white"
            >
              Posting
            </Button.Default>
          </div>
          <div className="mb-8">
            <Input
              name="title"
              placeholder="제목을 입력하세요"
              className="ml-[-15px] w-4/5 border-none text-[30px] font-bold outline-none placeholder:text-gray-500"
            />
            <div className="border-b" />
          </div>
          <div className="w-[200px]">
            <Input
              name="category"
              placeholder="카테고리를 입력해주세요"
              className="ml-[-15px] border-none outline-none placeholder:text-gray-400"
            />
            <div className="border-b" />
          </div>
          <div className="my-3 flex flex-wrap gap-x-1">
            {Array.isArray(categoryList) &&
              categoryList.map((category, index) => (
                <Button.Default
                  key={index}
                  type="button"
                  className="mb-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => methods.setValue("category", category)}
                >
                  {category}
                </Button.Default>
              ))}
          </div>
          <TagList />
          <Editor />
          <Button.Default
            type="submit"
            className="m-auto mt-[20px] rounded-full border-black px-[60px] font-bold hover:bg-black hover:text-white"
          >
            Posting
          </Button.Default>
        </form>
      </FormProvider>
    </div>
  );
};

export default PostingForm;
