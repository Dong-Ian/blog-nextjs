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
      `${process.env.NEXT_PUBLIC_API}/admin/post/edit`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          postSeq: postSeq,
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
  } catch (e) {
    console.error("editPost", e);
  }
}
