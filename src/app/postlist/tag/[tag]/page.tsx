import { getTagPostList } from "@/features/PostList/services/getPostList.service";
import PostListClient from "./PostListClient";

export default async function TagPostList({
  params,
  searchParams,
}: {
  params: { tag: string };
  searchParams: { page?: string };
}) {
  const tag = decodeURIComponent((await params).tag);
  const page = Number((await searchParams).page ?? 1);

  const res = await getTagPostList({ page, size: 5, tag });

  return (
    <PostListClient
      tag={tag}
      posts={res.postList}
      totalPages={res.postCount}
      currentPage={page}
    />
  );
}
