import getPost from "@/features/Post/services/getPost.service";
import { PostInterface } from "@/features/Post/type/Post.type";
import { Metadata } from "next";
import ClientPost from "./ClientPost";

export async function generateMetadata({
  params,
}: {
  params: { postSeq: string };
}): Promise<Metadata> {
  const post: PostInterface = await getPost({ postSeq: params.postSeq });

  const plainText = post.postContents
    .replace(/[#>*\[\]\(\)_`\-]/g, "")
    .slice(0, 160);

  return {
    title: post.postTitle,
    description: plainText,
    keywords: [
      ...(post.tags || []),
      post.categoryName || post.category || "",
    ].join(", "),
    openGraph: {
      title: post.postTitle,
      description: plainText,
      type: "article",
    },
  };
}

export default async function Post({
  params,
}: {
  params: { postSeq: string };
}) {
  const postSeq = params.postSeq;
  const post: PostInterface = await getPost({ postSeq });

  return (
    <article>
      <ClientPost post={post} />
    </article>
  );
}
