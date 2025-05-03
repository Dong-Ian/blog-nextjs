"use client";
import Divider from "@/components/atoms/Divider";
import BackButton from "@/components/molecules/BackButton";
import AccountComponent from "@/features/Account/components/AccountComponent";
import useAdminStore from "@/features/Admin/stores/adminStore";
import RelatedPostsByCategory from "@/features/Category/components/RelatedPostsByCategory";
import PostAction from "@/features/Post/components/PostAction";
import PostComment from "@/features/Post/components/PostComment";
import PostContents from "@/features/Post/components/PostContents";
import PostHeader from "@/features/Post/components/PostHeader";
import ScrollToBottomButton from "@/features/Post/components/ScrollToBottomButton";
import TableOfContents from "@/features/Post/components/TableOfContents";
import { PostInterface } from "@/features/PostList/types/PostList.type";

interface ClientPostProps {
  post: PostInterface;
  relatedPosts: PostInterface[];
}

export default function ClientPost({ post, relatedPosts }: ClientPostProps) {
  const { auth } = useAdminStore();

  return (
    <div className="flex w-full justify-center">
      <ScrollToBottomButton />
      <div className="hidden lg:fixed lg:left-5 lg:top-[120px] lg:block">
        <AccountComponent />
      </div>
      <div className="m-auto w-[90%] max-w-[700px]">
        <BackButton.Back />
        <PostHeader post={post} />
        {auth && <PostAction post={post} />}
        <Divider width={100} />
        <PostContents post={post} />
        <Divider width={100} />
        <RelatedPostsByCategory
          category={post.category}
          relatedPostList={relatedPosts}
        />
        <Divider width={100} />
        {auth && <PostAction post={post} />}
        <PostComment post={post} />
      </div>
      <div className="lg:top-25 hidden lg:fixed lg:right-0 lg:block">
        <TableOfContents title={post.title} />
      </div>
    </div>
  );
}
