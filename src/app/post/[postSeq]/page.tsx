import Divider from "@/components/atoms/Divider";
import BackButton from "@/components/molecules/BackButton";
import PostAction from "@/features/Post/components/PostAction";
import PostComment from "@/features/Post/components/PostComment";
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
    <div className="">
      <div className="m-auto w-[90%] max-w-[700px]">
        <BackButton />
        <PostHeader post={post} />
        <PostAction />
        <Divider width={100} />
        <PostContents post={post} />
        <Divider width={100} />
        <PostAction />
        <PostComment post={post} />
      </div>
    </div>
  );
}
