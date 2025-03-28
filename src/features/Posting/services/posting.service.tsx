export interface PostingFunctionProps {
  postTitle: string;
  postContents: string;
  tags: string[];
  category: string;
}

export default async function posting({
  postTitle,
  postContents,
  tags,
  category,
}: PostingFunctionProps) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API}/admin/post/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        postTitle: postTitle,
        postContents: postContents,
        imageSeqs: [],
        tags: tags,
        category: category,
        isPinned: "0",
      }),
    }
  );

  const res = await result.json();

  return res;
}
