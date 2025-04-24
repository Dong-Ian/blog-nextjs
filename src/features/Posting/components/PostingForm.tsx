"use client";
import Button from "@/components/atoms/Button";
import Editor from "@/components/atoms/Editor";
import BackButton from "@/components/molecules/BackButton";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import PostingCategory from "../../Category/components/PostingCategory";
import TagList from "../../Tag/components/TagList";
import posting from "../services/posting.service";
import Title from "./Title";

export interface PostingInterface {
  title: string;
  category: string;
  tags: string[];
  content: string;
}

interface PostingFromInterface {
  categoryList: { categoryId: number; name: string; postCount: number }[];
}

const PostingForm: React.FC<PostingFromInterface> = ({ categoryList }) => {
  const methods = useForm<PostingInterface>({ mode: "onSubmit" });
  const router = useRouter();

  const handleFormSubmit = async (data: PostingInterface) => {
    if (data.title === "") {
      alert("제목을 입력해주세요");
      return;
    }
    if (data.category === "") {
      alert("카테고리를 선택해주세요");
      return;
    }
    if (!data.content || data.content === "") {
      alert("내용을 입력해주세요");
      return;
    }

    if (window.confirm("포스팅 하시겠습니까?")) {
      const result = await posting({ form: data });

      if (result.status === 200) {
        router.push(`/post/${result.data.postSeq}`);
        return;
      }
      alert("포스팅이 완료되지 않았습니다.\n 잠시 후에 다시 시도해주세요");
    }
  };

  const onBack = () => {
    if (
      window.confirm(
        "내용이 저장되지 않습니다.\n정말로 글 작성을 취소하시겠습니까?"
      )
    ) {
      router.back();
    }
  };

  return (
    <div className="mb-[80px] mt-[30px] w-[90%] max-w-[1400px]">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <div className="flex w-full justify-between">
            <BackButton.Custom onBack={onBack} />
            <Button.Default
              type="submit"
              className="rounded-full border-black font-bold hover:bg-black hover:text-white"
            >
              Posting
            </Button.Default>
          </div>
          <Title />
          <PostingCategory categoryList={categoryList} />
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
