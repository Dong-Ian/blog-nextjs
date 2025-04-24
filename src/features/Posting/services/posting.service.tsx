import { PostingInterface } from "../components/PostingForm";

export interface PostingFunctionProps {
  form: PostingInterface;
}

export default async function posting({ form }: PostingFunctionProps) {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API}/post`, {
      method: "POST",
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
    });

    const res = await result.json();
    return res;
  } catch (e) {
    console.error("posting", e);
  }
}
