import Typography from "@/components/atoms/Typography";

const BlankPostList = () => {
  return (
    <div className="block h-[150px] w-full min-w-full grow p-[30px]">
      <Typography.P2>게시글이 없습니다.</Typography.P2>
      <Typography.P1 className="invisible">
        게시글이 없습니다.게시글이 없습니다.게시글이 없습니다.게시글이
        없습니다.게시글이 없습니다.게시글이 없습니다.게시글이 없습니다.게시글이
        없습니다.게시글이 없습니다.
      </Typography.P1>
    </div>
  );
};
export default BlankPostList;
