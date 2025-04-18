import { AuthPostProps } from "../type/Post.type";

export default async function unpin({ postSeq }: AuthPostProps) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API}/admin/post/update/unpin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          postSeq: postSeq,
          blogId: process.env.NEXT_PUBLIC_BLOG_ID,
        }),
      }
    );

    const res = await result.json();

    return res;
  } catch (e) {
    console.error("pin", e);
  }
}
