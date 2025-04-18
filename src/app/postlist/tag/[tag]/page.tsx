export const dynamic = "force-dynamic";

import { getTagPostList } from "@/features/PostList/services/getPostList.service";
import { TagPageProps } from "@/shared/types/main.type";
import PostListClient from "./PostListClient";

export default async function TagPostList({
  params,
  searchParams,
}: TagPageProps) {
  if (!searchParams || !params) return null;
  const { tag } = await params;
  const { page } = await searchParams;

  const decodedTag = decodeURIComponent(tag);
  const currentPage = Number(page ?? "1");

  const res = await getTagPostList({
    page: currentPage,
    size: 5,
    tag: decodedTag,
  });

  return (
    <PostListClient
      tag={decodedTag}
      posts={res.postList}
      totalPages={res.postCount}
      currentPage={currentPage}
    />
  );
}
