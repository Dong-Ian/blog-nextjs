import { AuthPostProps } from "../type/Post.type";

export default async function deletePost({ postSeq }: AuthPostProps) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API}/post/${postSeq}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const res = await result.json();

    return res;
  } catch (e) {
    console.error("deletePost", e);
  }
}
