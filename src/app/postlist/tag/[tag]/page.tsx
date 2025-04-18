export const dynamic = "force-dynamic";

import { getTagPostList } from "@/features/PostList/services/getPostList.service";
import PostListClient from "./PostListClient";

type PageProps = {
  params: { tag: string };
  searchParams: { page?: string };
};

export default async function TagPostList({ params, searchParams }: PageProps) {
  const { tag } = params;
  const { page } = searchParams;

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
