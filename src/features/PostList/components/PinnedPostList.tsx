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
    <div className="flex flex-col gap-2">
      {postList.pinnedPostList.map((post: PostInterface) => (
        <PostItem key={post.postSeq} post={post} />
      ))}
    </div>
  );
};

export default PinnedPostList;
