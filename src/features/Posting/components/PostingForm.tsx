"use client";

import Button from "@/components/atoms/Button";
import Editor from "@/components/atoms/Editor";
import Input from "@/components/atoms/Input";
import BackButton from "@/components/molecules/BackButton";
import getCategoryList from "@/shared/services/getCategoryList.service";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import TagList from "./TagList";

interface PostingInterface {
  title: string;
  category: string;
  tags: string[];
  contents: string;
}

const PostingForm = () => {
  const methods = useForm<PostingInterface>();
  const [categoryList, setCategoryList] = useState<string[]>([]);

  const getCategoryListFunction = async () => {
    const result = await getCategoryList();
    if (result.code === "01") {
      setCategoryList(result.categoryList);
      return;
    }
    alert("카테고리 리스트 에러");
  };

  const handleFormSubmit = (data: PostingInterface) => {
    console.table(data);
  };

  useEffect(() => {
    getCategoryListFunction();
  }, []);

  return (
    <div className="mb-[80px] mt-[30px] w-[90%] max-w-[1400px]">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <div className="flex w-full justify-between">
            <BackButton />
            <Button.Default
              type="submit"
              className="rounded-full border-black hover:bg-black hover:text-white"
            >
              포스팅하기
            </Button.Default>
          </div>
          <div className="mb-8">
            <Input
              name="title"
              placeholder="제목을 입력하세요"
              className="ml-[-15px] w-4/5 border-none text-[30px] outline-none placeholder:text-gray-500"
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
            {categoryList.map((category, index) => (
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
            className="m-auto mt-[20px] rounded-full border-black px-[60px] hover:bg-black hover:text-white"
          >
            포스팅하기
          </Button.Default>
        </form>
      </FormProvider>
    </div>
  );
};

export default PostingForm;
