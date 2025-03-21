import Typography from "@/components/atoms/Typography";
import PostItem from "@/features/PostList/components/PostItem";
import { getCategoryPostList } from "@/features/PostList/services/getPostList.service";
import { PostInterface } from "@/features/PostList/types/PostList.type";

export default async function CategoryPostList({
  params,
}: {
  params: { category: string };
}) {
  const category = decodeURIComponent((await params).category);
  const postList = await getCategoryPostList({
    page: 1,
    size: 5,
    category: category,
  });

  return (
    <div className="m-auto flex w-[90%] max-w-screen-md flex-col justify-center">
      <Typography.SubTitle1 className="ml-[30px] text-gray-500">
        {category}
      </Typography.SubTitle1>
      {postList.postList.map((post: PostInterface) => (
        <PostItem key={post.postSeq} post={post} />
      ))}
    </div>
  );
}
