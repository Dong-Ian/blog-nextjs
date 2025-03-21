import Typography from "@/components/atoms/Typography";

const PostAction = () => {
  return (
    <div className="flex justify-end gap-3 py-[10px] pr-[20px]">
      <Typography.P3>수정</Typography.P3>
      <Typography.P3>삭제</Typography.P3>
      <Typography.P3>게시글 고정하기</Typography.P3>
    </div>
  );
};

export default PostAction;
