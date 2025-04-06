import { getPinnedPostList } from "@/features/PostList/services/getPostList.service";
import PostListClient from "./PostListClient";

export default async function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number((await searchParams).page ?? 1);
  const res = await getPinnedPostList({ page, size: 5 });

  return (
    <PostListClient
      posts={res.postList}
      totalPages={res.postCount}
      currentPage={page}
    />
  );
}
