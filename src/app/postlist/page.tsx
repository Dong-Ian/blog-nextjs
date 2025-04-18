export const dynamic = "force-dynamic";

import { getRecentPostList } from "@/features/PostList/services/getPostList.service";
import PostListClient from "./PostListClient";

type PageParams = { page: string };

export default async function Page({
  searchParams,
}: {
  searchParams: PageParams;
}) {
  const page = Number(searchParams.page ?? 1);
  const res = await getRecentPostList({ page, size: 5 });

  return (
    <PostListClient
      posts={res.postList}
      totalPages={res.postCount}
      currentPage={page}
    />
  );
}
