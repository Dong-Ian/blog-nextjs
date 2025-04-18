export default async function getCategoryList() {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API}/post/category/list`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blogId: process.env.NEXT_PUBLIC_BLOG_ID,
        }),
      }
    );

    const res = await result.json();

    return res.categoryList;
  } catch (e) {
    console.error("getCategoryList", e);
  }
}
