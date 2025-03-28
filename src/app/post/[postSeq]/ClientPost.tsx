"use client";
import Divider from "@/components/atoms/Divider";
import BackButton from "@/components/molecules/BackButton";
import AccountComponent from "@/features/Account/components/AccountComponent";
import { UserInfoInterface } from "@/features/Account/types/Account.type";
import PostAction from "@/features/Post/components/PostAction";
import PostComment from "@/features/Post/components/PostComment";
import PostContents from "@/features/Post/components/PostContents";
import PostHeader from "@/features/Post/components/PostHeader";
import ScrollToBottomButton from "@/features/Post/components/ScrollToBottomButton";
import { PostInterface } from "@/features/Post/type/Post.type";

interface ClientPostProps {
  post: PostInterface;
  userInfo: UserInfoInterface;
}

export default function ClientPost({ post, userInfo }: ClientPostProps) {
  return (
    <div className="flex w-full justify-center">
      <ScrollToBottomButton />
      <div className="hidden lg:fixed lg:left-0 lg:top-40 lg:block">
        <AccountComponent userInfo={userInfo} />
      </div>
      <div className="m-auto w-[90%] max-w-[700px]">
        <BackButton.Back />
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
