import Divider from "@/components/atoms/Divider";
import PostAction from "@/features/Post/components/PostAction";
import PostContents from "@/features/Post/components/PostContents";
import PostHeader from "@/features/Post/components/PostHeader";
import getPost from "@/features/Post/services/getPost.service";
import { PostInterface } from "@/features/Post/type/Post.type";

export default async function Post({
  params,
}: {
  params: { postSeq: string };
}) {
  const postSeq = (await params).postSeq;
  const post: PostInterface = await getPost({ postSeq: postSeq });

  return (
    <div className="mt-[100px]">
      <PostHeader post={post} />
      <PostAction />
      <Divider width={100} />
      <PostContents post={post} />
      <Divider width={100} />
    </div>
  );
}
