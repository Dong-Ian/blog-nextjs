export const dynamic = "force-dynamic";

import search from "@/features/Search/services/search.service";
import { KeywordSearchPageProps } from "@/shared/types/main.type";
import PostListClient from "./PostListClient";

export default async function Page({ searchParams }: KeywordSearchPageProps) {
  const keyword = (await searchParams).keyword;
  const posts = await search({ keyword });
  const currentPage = Number((await searchParams).page ?? "1");

  return (
    <PostListClient
      keyword={keyword}
      posts={posts.posts}
      currentPage={currentPage}
      totalPages={posts.totalCount}
    />
  );
}
