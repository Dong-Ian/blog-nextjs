import { AuthPostProps } from "../type/Post.type";

export default async function deletePost({ postSeq }: AuthPostProps) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API}/admin/post/delete`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          postSeq: postSeq,
        }),
      }
    );

    const res = await result.json();

    return res;
  } catch (e) {
    console.error("deletePost", e);
  }
}
