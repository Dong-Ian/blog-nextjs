import { getCategoryPostList } from "@/features/PostList/services/getPostList.service";
import PostListClient from "./PostListClient";

export default async function TagPostList({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { page?: string };
}) {
  const category = decodeURIComponent((await params).category);
  const page = Number((await searchParams).page ?? 1);

  const res = await getCategoryPostList({ page, size: 5, category: category });

  return (
    <PostListClient
      category={category}
      posts={res.postList}
      totalPages={res.postCount}
      currentPage={page}
    />
  );
}
