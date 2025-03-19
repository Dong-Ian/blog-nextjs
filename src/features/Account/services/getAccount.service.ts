export default async function getAccount() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API}/user/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      blogId: process.env.NEXT_PUBLIC_BLOG_ID,
    }),
    next: { revalidate: 60300 },
  });

  const res = await result.json();

  return res.profileResult;
}
