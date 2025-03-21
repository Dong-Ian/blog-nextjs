import Typography from "@/components/atoms/Typography";

const PostAction = () => {
  return (
    <div className="flex justify-end py-[10px] pr-[20px]">
      <div className="flex cursor-pointer gap-3">
        <Typography.P3>수정</Typography.P3>
        <Typography.P3>삭제</Typography.P3>
        <Typography.P3>게시글 고정하기</Typography.P3>
      </div>
    </div>
  );
};

export default PostAction;
