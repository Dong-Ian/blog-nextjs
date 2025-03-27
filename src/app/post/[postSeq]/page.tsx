import Divider from "@/components/atoms/Divider";
import BackButton from "@/components/molecules/BackButton";
import AccountComponent from "@/features/Account/components/AccountComponent";
import PostAction from "@/features/Post/components/PostAction";
import PostComment from "@/features/Post/components/PostComment";
import PostContents from "@/features/Post/components/PostContents";
import PostHeader from "@/features/Post/components/PostHeader";
import ScrollToBottomButton from "@/features/Post/components/ScrollToBottomButton";
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
    <div className="flex w-full justify-center">
      <ScrollToBottomButton />
      <div className="hidden lg:fixed lg:left-0 lg:top-40 lg:block">
        <AccountComponent />
      </div>
      <div className="m-auto w-[90%] max-w-[800px]">
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
