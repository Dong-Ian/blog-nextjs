"use client";
import Typography from "@/components/atoms/Typography";
import Pagination from "@/components/molecules/Pagination";
import PostItem from "@/features/PostList/components/PostItem";
import { getRecentPostList } from "@/features/PostList/services/getPostList.service";
import { PostInterface } from "@/features/PostList/types/PostList.type";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostList() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const page = pageParam ? Number(pageParam) : 1;

  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    (async () => {
      const res = await getRecentPostList({
        page,
        size: 5,
      });
      setPosts(res.unpinnedPostList);
      setTotalPages(res.postCount);
    })();
  }, [page]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    router.push(`/postlist?page=${selected + 1}`);
  };
  return (
    <div className="m-auto flex w-[90%] max-w-screen-md flex-col justify-center">
      <Typography.SubTitle1 className="ml-[30px] text-gray-500">
        최신글
      </Typography.SubTitle1>
      {posts.map((post: PostInterface) => (
        <PostItem key={post.postSeq} post={post} />
      ))}
      <Pagination
        postCount={totalPages}
        perPage={5}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
