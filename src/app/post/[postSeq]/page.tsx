export const dynamic = "force-dynamic";

import getPost from "@/features/Post/services/getPost.service";
import { PostInterface } from "@/features/Post/type/Post.type";
import { getCategoryPostList } from "@/features/PostList/services/getPostList.service";
import { PageProps } from "@/shared/types/main.type";
import ClientPost from "./ClientPost";

// export async function generateMetadata({ params }: PageProps) {
//   const postSeq = params.postSeq;
//   const post: PostInterface = await getPost({ postSeq: postSeq });

//   const plainText = post.postContents
//     .replace(/[#>*\[\]\(\)_`\-]/g, "")
//     .slice(0, 160);

//   return {
//     title: post.postTitle,
//     description: plainText,
//     keywords: [
//       ...(post.tags || []),
//       post.categoryName || post.category || "",
//     ].join(", "),
//     openGraph: {
//       title: post.postTitle,
//       description: plainText,
//       type: "article",
//     },
//   };
// }

export default async function Post({ params }: PageProps) {
  const { postSeq } = await params;
  if (!postSeq) return null;
  const post: PostInterface = await getPost({ postSeq });
  const relatedPosts =
    post.category !== undefined
      ? await getCategoryPostList({ page: 1, size: 5, category: post.category })
      : [];

  return (
    <article className="w-full max-w-screen-md">
      <ClientPost post={post} relatedPosts={relatedPosts.postList} />
    </article>
  );
}
