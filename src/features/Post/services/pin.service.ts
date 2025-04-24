import { AuthPostProps } from "../type/Post.type";

export default async function pin({ postSeq }: AuthPostProps) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API}/post/${postSeq}/pin`,
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
    console.error("pin", e);
  }
}
