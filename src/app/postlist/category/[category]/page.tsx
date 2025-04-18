export const dynamic = "force-dynamic";

import { getCategoryPostList } from "@/features/PostList/services/getPostList.service";
import { CategoryPageProps } from "@/shared/types/main.type";
import PostListClient from "./PostListClient";

export default async function TagPostList({
  params,
  searchParams,
}: CategoryPageProps) {
  const { category } = await params;

  const decodedCategory = decodeURIComponent(category);
  const currentPage = Number((await searchParams).page ?? "1");

  const res = await getCategoryPostList({
    page: currentPage,
    size: 5,
    category: decodedCategory,
  });

  return (
    <PostListClient
      category={decodedCategory}
      posts={res.postList}
      totalPages={res.postCount}
      currentPage={currentPage}
    />
  );
}
