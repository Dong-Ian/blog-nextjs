interface getMonthPostListProps {
  year: number;
  month: number;
}
export default async function getMonthPostList({
  year,
  month,
}: getMonthPostListProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/post/calendar?year=${year}&month=${month}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        blogId: process.env.NEXT_PUBLIC_BLOG_ID!,
      },
    }
  );

  const res = await response.json();

  return res.data;
}
