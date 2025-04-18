import Button from "@/components/atoms/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import unpin from "../services/pin.service";
import pin from "../services/unpin.service";
import { PostInterface } from "../type/Post.type";

interface PostActionProps {
  post: PostInterface;
}

const PostAction = ({ post }: PostActionProps) => {
  const router = useRouter();
  const [buttonState, setButtonState] = useState(
    post.postSeq === "1" ? true : false
  );

  const handlePinPost = async () => {
    if (window.confirm("게시글을 고정하시겠습니까?")) {
      const result = await pin({ postSeq: post.postSeq });

      if (result.code === "01") {
        setButtonState(true);
      }
    }
  };

  // const handleDeletePost = async () => {
  //   if (window.confirm("게시글을 삭제하시겠습니까?")) {
  //     const result = await deletePost({ postSeq: post.postSeq });

  //     if (result.code === "01") {
  //       alert("게시글이 삭제되었습니다.");
  //       router.replace("/");
  //     }
  //   }
  // };

  const handleUnPinPost = async () => {
    if (window.confirm("게시글을 고정 해제하시겠습니까?")) {
      const result = await unpin({ postSeq: post.postSeq });

      if (result.code === "01") {
        setButtonState(false);
      }
    }
  };

  const handleEditPost = async () => {
    if (window.confirm("게시글을 수정하시겠습니까?")) {
      router.push(`/editpost/${post.postSeq}`);
    }
  };

  return (
    <div className="flex justify-end py-[10px] ">
      <div className="flex cursor-pointer gap-3">
        {!buttonState ? (
          <Button.Default className="" onClick={handlePinPost}>
            게시글 고정하기
          </Button.Default>
        ) : (
          <Button.Default className="" onClick={handleUnPinPost}>
            게시글 고정 해제하기
          </Button.Default>
        )}
        <Button.Default onClick={handleEditPost} className="">
          수정
        </Button.Default>
        {/* <Button.Default onClick={handleDeletePost} className="">
          삭제
        </Button.Default> */}
      </div>
    </div>
  );
};

export default PostAction;
