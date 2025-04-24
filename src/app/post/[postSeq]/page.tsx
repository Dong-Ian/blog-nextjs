export const dynamic = "force-dynamic";

import getPost from "@/features/Post/services/getPost.service";
import { getCategoryPostList } from "@/features/PostList/services/getPostList.service";
import { PostInterface } from "@/features/PostList/types/PostList.type";
import { PageProps } from "@/shared/types/main.type";
import ClientPost from "./ClientPost";

export async function generateMetadata({ params }: PageProps) {
  const { postSeq } = await params;
  const post: PostInterface = await getPost({ postSeq: postSeq });

  const plainText = post.content
    .replace(/[#>*\[\]\(\)_`\-]/g, "")
    .slice(0, 160);

  return {
    title: post.title,
    description: plainText,
    keywords: [...(post.tags || []), post.category || post.category || ""].join(
      ", "
    ),
    openGraph: {
      title: post.title,
      description: plainText,
      type: "article",
    },
  };
}

export default async function Post({ params }: PageProps) {
  const { postSeq } = await params;

  const post: PostInterface = await getPost({ postSeq });

  const relatedPosts =
    post.category !== undefined
      ? await getCategoryPostList({ page: 1, size: 5, category: post.category })
      : [];

  return (
    <article className="w-full max-w-screen-md">
      <ClientPost post={post} relatedPosts={relatedPosts.posts} />
    </article>
  );
}
