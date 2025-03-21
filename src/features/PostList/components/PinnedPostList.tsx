import Typography from "@/components/atoms/Typography";
import { getRecentPostList } from "../services/getPostList.service";
import { PostInterface } from "../types/PostList.type";
import PostItem from "./PostItem";

interface RecentPostListProps {
  page: number;
  size: number;
}

const PinnedPostList = async ({ page, size }: RecentPostListProps) => {
  const postList = await getRecentPostList({ page, size });

  return (
    <div
    // className="border-solid border-2 rounded-lg"
    >
      <Typography.P2 className="ml-[30px] mt-[20px] text-[20px] font-semibold">
        고정글
      </Typography.P2>
      <div className="flex flex-col gap-2">
        {postList.pinnedPostList.map((post: PostInterface) => (
          <PostItem key={post.postSeq} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PinnedPostList;
