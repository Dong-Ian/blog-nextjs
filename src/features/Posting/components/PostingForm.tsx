"use client";
import Button from "@/components/atoms/Button";
import Editor from "@/components/atoms/Editor";
import BackButton from "@/components/molecules/BackButton";
import { FormProvider, useForm } from "react-hook-form";
import Category from "./Category";
import TagList from "./TagList";
import Title from "./Title";

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

  const handleFormSubmit = async (data: PostingInterface) => {
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
          <Title />
          <Category categoryList={categoryList} />
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
