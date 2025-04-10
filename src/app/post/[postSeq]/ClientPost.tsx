"use client";
import Divider from "@/components/atoms/Divider";
import BackButton from "@/components/molecules/BackButton";
import AccountComponent from "@/features/Account/components/AccountComponent";
import useAdminStore from "@/features/Admin/stores/adminStore";
import PostAction from "@/features/Post/components/PostAction";
import PostComment from "@/features/Post/components/PostComment";
import PostContents from "@/features/Post/components/PostContents";
import PostHeader from "@/features/Post/components/PostHeader";
import ScrollToBottomButton from "@/features/Post/components/ScrollToBottomButton";
import { PostInterface } from "@/features/Post/type/Post.type";

interface ClientPostProps {
  post: PostInterface;
}

export default function ClientPost({ post }: ClientPostProps) {
  const { auth } = useAdminStore();

  if (auth) {
    return (
      <div className="flex w-full justify-center">
        <ScrollToBottomButton />
        <div className="hidden lg:fixed lg:left-0 lg:top-40 lg:block">
          <AccountComponent />
        </div>
        <div className="m-auto w-[90%] max-w-[700px]">
          <BackButton.Back />
          <PostHeader post={post} />
          {auth && <PostAction post={post} />}
          <Divider width={100} />
          <PostContents post={post} />
          <Divider width={100} />
          {auth && <PostAction post={post} />}
          <PostComment post={post} />
        </div>
      </div>
    );
  }
}
