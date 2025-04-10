import { AuthPostProps } from "../type/Post.type";

export default async function pin({ postSeq }: AuthPostProps) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API}/admin/post/update/pin`,
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
}
