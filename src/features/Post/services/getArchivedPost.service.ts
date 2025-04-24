interface getPostProps {
  postSeq: string;
}

export default async function getArchivedPost({ postSeq }: getPostProps) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API}/post/${postSeq}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          blogId: process.env.NEXT_PUBLIC_BLOG_ID!,
        },
        next: { revalidate: 60300 },
      }
    );

    const res = await result.json();
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.error("getPost", e);
  }
}
