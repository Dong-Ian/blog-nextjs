export const dynamic = "force-dynamic";
import { getPinnedPostList } from "@/features/PostList/services/getPostList.service";
import PostListClient from "./PostListClient";

type PageProps = {
  params: {
    page?: string;
  };
};

export default async function Page({ params }: PageProps) {
  const page = Number(params.page ?? 1);
  const res = await getPinnedPostList({ page, size: 5 });

  return (
    <PostListClient
      posts={res.postList}
      totalPages={res.postCount}
      currentPage={page}
    />
  );
}
