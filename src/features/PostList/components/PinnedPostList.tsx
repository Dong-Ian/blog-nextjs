import Typography from "@/components/atoms/Typography";
import Link from "next/link";
import { getPinnedPostList } from "../services/getPostList.service";
import { PostInterface } from "../types/PostList.type";
import PostItem from "./PostItem";

interface RecentPostListProps {
  page: number;
  size: number;
}

const PinnedPostList = async ({ page, size }: RecentPostListProps) => {
  const postList = await getPinnedPostList({ page, size });

  return (
    <div>
      <div className="mt-[20px] flex items-center justify-between px-[30px]">
        <Typography.P2 className="text-[20px] font-semibold">
          고정글
        </Typography.P2>
        <Link href={"/postlist/pinned"}>
          <Typography.P3 className="cursor-pointer">
            고정글 전체보기
          </Typography.P3>
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

export default PinnedPostList;
