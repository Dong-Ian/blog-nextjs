import { PostingInterface } from "../components/PostingForm";

export interface PostingFunctionProps {
  form: PostingInterface;
}

export default async function posting({ form }: PostingFunctionProps) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API}/admin/post/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        postTitle: form.title,
        postContents: form.contents,
        imageSeqs: [],
        tags: form.tags,
        category: form.category,
        isPinned: "0",
      }),
    }
  );

  const res = await result.json();

  return res;
}
