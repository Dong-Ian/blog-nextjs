interface getPostProps {
  postSeq: string;
}

export default async function getPost({ postSeq }: getPostProps) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_TEST}/post/${postSeq}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        BlogId: process.env.NEXT_PUBLIC_BLOG_ID!,
      },
      next: { revalidate: 60300 },
    }
  );

  const res = await result.json();
  return res.postList;
}
