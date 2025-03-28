"use client";
import Button from "@/components/atoms/Button";
import Editor from "@/components/atoms/Editor";
import BackButton from "@/components/molecules/BackButton";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import posting from "../services/posting.service";
import Category from "./Category";
import TagList from "./TagList";
import Title from "./Title";

export interface PostingInterface {
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
  const router = useRouter();

  const handleFormSubmit = async (data: PostingInterface) => {
    if (window.confirm("포스팅 하시겠습니까?")) {
      const result = await posting({ form: data });

      if (result.code === "01") {
        router.push(`/post/${result.postSeq}`);
      }
    }
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
