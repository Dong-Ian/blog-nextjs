export default async function getTagList() {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API}/user/tags`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        blogId: process.env.NEXT_PUBLIC_BLOG_ID!,
      },
    });

    const res = await result.json();
    return res.data;
  } catch (e) {
    console.error("getCategoryList", e);
  }
}
