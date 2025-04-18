export const dynamic = "force-dynamic";

import { getCategoryPostList } from "@/features/PostList/services/getPostList.service";
import PostListClient from "./PostListClient";

type PageParams = Promise<{
  category: string;
}>;

type SearchParams = Promise<{
  page?: string;
}>;

export default async function TagPostList({
  params,
  searchParams,
}: {
  params: PageParams;
  searchParams: SearchParams;
}) {
  console.log("📌 [SERVER] TagPostList 진입");

  try {
    const { category } = await params;
    const { page } = await searchParams;

    console.log("📌 [SERVER] category:", category);
    console.log("📌 [SERVER] page:", page);

    const decodedCategory = decodeURIComponent(category);
    const currentPage = Number(page ?? "1");

    console.log("📌 [SERVER] decodedCategory:", decodedCategory);
    console.log("📌 [SERVER] currentPage:", currentPage);

    const res = await getCategoryPostList({
      page: currentPage,
      size: 5,
      category: decodedCategory,
    });

    console.log("📌 [SERVER] getCategoryPostList 결과:", res);

    return (
      <PostListClient
        category={decodedCategory}
        posts={res.postList}
        totalPages={res.postCount}
        currentPage={currentPage}
      />
    );
  } catch (error: unknown) {
    console.error(
      "❌ [SERVER ERROR] TagPostList 렌더링 중 에러:",
      error?.message || error
    );
    throw error;
  }
}
