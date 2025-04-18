export const dynamic = "force-dynamic";

import { getCategoryPostList } from "@/features/PostList/services/getPostList.service";
import PostListClient from "./PostListClient";

type PageProps = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
};

export default async function TagPostList({ params, searchParams }: PageProps) {
  const { category } = await params;
  const { page } = await searchParams;

  const decodedCategory = decodeURIComponent(category);
  const currentPage = Number(page ?? "1");

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
