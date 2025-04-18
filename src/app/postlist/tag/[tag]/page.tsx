import { getTagPostList } from "@/features/PostList/services/getPostList.service";
import PostListClient from "./PostListClient";

type PageParams = Promise<{
  tag: string;
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
