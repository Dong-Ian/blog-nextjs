import Typography from "@/components/atoms/Typography";
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
      <Typography.P2 className="ml-[30px] mt-[20px] text-[20px] font-semibold">
        최신글
      </Typography.P2>
      <div className="flex flex-col gap-2">
        {postList.unpinnedPostList.map((post: PostInterface) => (
          <PostItem key={post.postSeq} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RecentPostList;
