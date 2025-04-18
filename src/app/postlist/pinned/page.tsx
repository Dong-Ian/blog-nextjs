export const dynamic = "force-dynamic";
import { getPinnedPostList } from "@/features/PostList/services/getPostList.service";
import { SearchPageProps } from "@/shared/types/main.type";
import PostListClient from "./PostListClient";

export default async function Page({ searchParams }: SearchPageProps) {
  if (!searchParams) return null;
  const currentPage = Number((await searchParams).page ?? "1");

  const res = await getPinnedPostList({ page: currentPage, size: 5 });

  return (
    <PostListClient
      posts={res.postList}
      totalPages={res.postCount}
      currentPage={currentPage}
    />
  );
}
