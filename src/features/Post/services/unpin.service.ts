import { AuthPostProps } from "../type/Post.type";

export default async function unpin({ postSeq }: AuthPostProps) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API}/post/${postSeq}/unpin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          blogId: process.env.NEXT_PUBLIC_BLOG_ID!,
        },
        credentials: "include",
      }
    );

    const res = await result.json();
    return res;
  } catch (e) {
    console.error("unpin", e);
  }
}
