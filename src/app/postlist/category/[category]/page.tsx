export const dynamic = "force-dynamic";

import { getCategoryPostList } from "@/features/PostList/services/getPostList.service";
import PostListClient from "./PostListClient";

type PageParams = {
  category: string;
};

type SearchParams = {
  page?: string;
};

export default async function TagPostList({
  params,
  searchParams,
}: {
  params: PageParams;
  searchParams: SearchParams;
}) {
  console.log("📌 [SERVER] TagPostList 진입");

  try {
    const { category } = params;
    const { page } = searchParams;

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
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        "❌ [SERVER ERROR] TagPostList 렌더링 중 에러:",
        error.message
      );
    } else {
      console.error("❌ [SERVER ERROR] TagPostList 알 수 없는 에러:", error);
    }
    throw error;
  }
}
