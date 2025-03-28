import getAccount from "@/features/Account/services/getAccount.service";
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
  const userInfo = await getAccount();

  return <ClientPost post={post} userInfo={userInfo} />;
}
