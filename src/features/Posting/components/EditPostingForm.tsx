"use client";
import Button from "@/components/atoms/Button";
import Editor from "@/components/atoms/Editor";
import BackButton from "@/components/molecules/BackButton";
import { PostInterface } from "@/features/Post/type/Post.type";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import PostingCategory from "../../Category/components/PostingCategory";
import editpost from "../services/editpost.service";
import TagList from "./TagList";
import Title from "./Title";

export interface EditPostingInterface {
  title: string;
  category: string;
  tags: string[];
  contents: string;
}

interface PostingFromInterface {
  post: PostInterface;
  categoryList: string[];
}
const EditPostingForm: React.FC<PostingFromInterface> = ({
  post,
  categoryList,
}) => {
  const methods = useForm<EditPostingInterface>({
    mode: "onSubmit",
    defaultValues: {
      title: post.postTitle,
      category: post.category,
      tags: post.tags,
      contents: post.postContents,
    },
  });

  const router = useRouter();

  const handleFormSubmit = async (data: EditPostingInterface) => {
    if (data.title === "") {
      alert("제목을 입력해주세요");
      return;
    }
    if (data.category === "") {
      alert("카테고리를 선택해주세요");
      return;
    }
    if (!data.contents || data.contents === "") {
      alert("내용을 입력해주세요");
      return;
    }

    if (window.confirm("게시글을 수정하시겠습니까?")) {
      const result = await editpost({ postSeq: post.postSeq, form: data });

      if (result.code === "01") {
        router.push(`/post/${post.postSeq}`);
        return;
      }

      alert("수정이 완료되지 않았습니다.\n 잠시 후에 다시 시도해주세요");
    }
  };

  const onBack = () => {
    if (
      window.confirm(
        "내용이 저장되지 않습니다.\n정말로 글 수정을 취소하시겠습니까?"
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
              Editing
            </Button.Default>
          </div>
          <Title />
          <PostingCategory categoryList={categoryList} />
          <TagList prevTagList={post.tags} />
          <Editor />
          <Button.Default
            type="submit"
            className="m-auto mt-[20px] rounded-full border-black px-[60px] font-bold hover:bg-black hover:text-white"
          >
            Editing
          </Button.Default>
        </form>
      </FormProvider>
    </div>
  );
};

export default EditPostingForm;
