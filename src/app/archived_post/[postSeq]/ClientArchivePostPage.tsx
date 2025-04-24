"use client";
import { useEffect, useState } from "react";

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
import getArchivedPost from "@/features/Post/services/getArchivedPost.service";
import { getCategoryPostList } from "@/features/PostList/services/getPostList.service";
import { PostInterface } from "@/features/PostList/types/PostList.type";

function ClientArchivePostPage({ postSeq }: { postSeq: string }) {
  const { auth } = useAdminStore();
  const [post, setPost] = useState<PostInterface>();
  const [relatedPosts, setRelatedPosts] = useState<PostInterface[]>([]);

  const getPostFunction = async () => {
    const result = await getArchivedPost({ postSeq });
    setPost(result);
  };

  const getRelatedPostFunction = async () => {
    if (post) {
      const relatedPostResult = await getCategoryPostList({
        page: 1,
        size: 5,
        category: post.category,
      });
      setRelatedPosts(relatedPostResult.posts);
    }
  };

  useEffect(() => {
    getPostFunction();
  }, []);

  useEffect(() => {
    getRelatedPostFunction();
  }, [post]);

  if (post && relatedPosts) {
    return (
      <article className="w-full max-w-screen-md">
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
            <RelatedPostsByCategory
              category={post.category}
              relatedPostList={relatedPosts}
            />
            <Divider width={100} />
            {auth && <PostAction post={post} />}
            <PostComment post={post} />
          </div>
          <div className="hidden lg:fixed lg:right-0 lg:top-40 lg:block">
            <TableOfContents title={post.title} />
          </div>
        </div>
      </article>
    );
  }
}

export default ClientArchivePostPage;
