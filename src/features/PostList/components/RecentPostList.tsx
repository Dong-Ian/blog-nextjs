import Typography from "@/components/atoms/Typography";
import Link from "next/link";
import { getRecentPostList } from "../services/getPostList.service";
import { PostInterface } from "../types/PostList.type";
import PostItem from "./PostItem";

interface RecentPostListProps {
  page: number;
  size: number;
}

const RecentPostList = async ({ page, size }: RecentPostListProps) => {
  const postList = await getRecentPostList({ page, size });

  return (
    <div>
      <div className="mt-[20px] flex items-center justify-between px-[30px]">
        <Typography.P2 className="text-[20px] font-semibold">
          최신글
        </Typography.P2>
        <Link href={"/postlist"}>
          <Typography.P3>최신글 전체보기</Typography.P3>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {postList.postList.map((post: PostInterface) => (
          <PostItem key={post.postSeq} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RecentPostList;
