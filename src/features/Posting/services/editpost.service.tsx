import { PostingInterface } from "../components/PostingForm";

export interface PostingFunctionProps {
  postSeq: string;
  form: PostingInterface;
}

export default async function editpost({
  postSeq,
  form,
}: PostingFunctionProps) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API}/post/${postSeq}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          title: form.title,
          content: form.content,
          tags: form.tags,
          category: form.category,
        }),
      }
    );

    const res = await result.json();

    return res;
  } catch (e) {
    console.error("editPost", e);
  }
}
