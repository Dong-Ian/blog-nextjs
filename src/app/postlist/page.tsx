export const dynamic = "force-dynamic";

import { getRecentPostList } from "@/features/PostList/services/getPostList.service";
import PostListClient from "./PostListClient";

type PageProps = {
  params: Promise<{ page?: string }>;
};

export default async function Page({ params }: PageProps) {
  const { page } = await params;
  const currentPage = Number(page ?? "1");

  const res = await getRecentPostList({ page: currentPage, size: 5 });

  return (
    <PostListClient
      posts={res.postList}
      totalPages={res.postCount}
      currentPage={currentPage}
    />
  );
}
