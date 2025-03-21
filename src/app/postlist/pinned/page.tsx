import Typography from "@/components/atoms/Typography";
import PostItem from "@/features/PostList/components/PostItem";
import { getPinnedPostList } from "@/features/PostList/services/getPostList.service";
import { PostInterface } from "@/features/PostList/types/PostList.type";

export default async function PinnedPostList() {
  const postList = await getPinnedPostList({ page: 1, size: 5 });

  return (
    <div className="m-auto flex w-[90%] max-w-screen-md flex-col justify-center">
      <Typography.SubTitle1 className="ml-[30px] text-gray-500">
        고정글
      </Typography.SubTitle1>
      {postList.pinnedPostList.map((post: PostInterface) => (
        <PostItem key={post.postSeq} post={post} />
      ))}
    </div>
  );
}
