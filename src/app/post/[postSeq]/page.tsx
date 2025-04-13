import getPost from "@/features/Post/services/getPost.service";
import { PostInterface } from "@/features/Post/type/Post.type";
import ClientPost from "./ClientPost";

export default async function Post({
  params,
}: {
  params: { postSeq: string };
}) {
  const postSeq = (await params).postSeq;
  const post: PostInterface = await getPost({ postSeq: postSeq });

  return (
    <>
      <title>{post.postTitle}</title>
      <ClientPost post={post} />
    </>
  );
}
