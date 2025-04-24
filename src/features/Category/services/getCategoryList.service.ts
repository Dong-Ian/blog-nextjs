export default async function getCategoryList() {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API}/user/categories`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          blogId: process.env.NEXT_PUBLIC_BLOG_ID!,
        },
      }
    );

    const res = await result.json();
    return res.data;
  } catch (e) {
    console.error("getCategoryList", e);
  }
}
