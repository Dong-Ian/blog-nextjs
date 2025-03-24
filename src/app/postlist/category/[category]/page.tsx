"use client";
import Typography from "@/components/atoms/Typography";
import Pagination from "@/components/molecules/Pagination";
import PostItem from "@/features/PostList/components/PostItem";
import { getCategoryPostList } from "@/features/PostList/services/getPostList.service";
import { PostInterface } from "@/features/PostList/types/PostList.type";
import { useRouter, useSearchParams } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function CategoryPostList({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const page = pageParam ? Number(pageParam) : 1;

  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const { category } = use(params);
  const decodedCategory = decodeURIComponent(category);

  useEffect(() => {
    (async () => {
      const res = await getCategoryPostList({
        page,
        size: 5,
        category: decodedCategory,
      });
      setPosts(res.postList);
      setTotalPages(res.postCount);
    })();
  }, [page]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    router.push(`/postlist/category/${category}?page=${selected + 1}`);
  };

  return (
    <div className="m-auto flex w-[90%] max-w-screen-md flex-col justify-center">
      <Typography.SubTitle1 className="ml-[30px] text-gray-500">
        {decodedCategory}
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
