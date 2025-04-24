interface getPostProps {
  postSeq: string;
}

export default async function getPost({ postSeq }: getPostProps) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API}/post/${postSeq}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          blogId: process.env.NEXT_PUBLIC_BLOG_ID!,
        },
        next: { revalidate: 60300 },
      }
    );

    const res = await result.json();
    return res.data;
  } catch (e) {
    console.error("getPost", e);
  }
}
