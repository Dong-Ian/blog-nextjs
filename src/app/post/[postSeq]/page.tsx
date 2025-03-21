import EditorMarkdown from "@/components/atoms/EditorMarkdown";
import Typography from "@/components/atoms/Typography";
import getPost from "@/features/Post/services/getPost.service";
import { PostInterface } from "@/features/PostList/types/PostList.type";

export default async function Post({
  params,
}: {
  params: { postSeq: string };
}) {
  const postSeq = (await params).postSeq;
  const post: PostInterface = await getPost({ postSeq: postSeq });

  return (
    <div className="mt-[100px]">
      <Typography.P1 className="text-[20px] text-gray-500">
        {post.category}
      </Typography.P1>
      <Typography.Head2>{post.postTitle}</Typography.Head2>

      <EditorMarkdown content={post.postContents} />
    </div>
  );
}
