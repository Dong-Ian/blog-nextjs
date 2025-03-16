export default async function getAccount() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API}/user/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      blogId: process.env.NEXT_PUBLIC_BLOG_ID,
    }),
  });

  return await result.json();
}
