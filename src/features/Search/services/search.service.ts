interface searchProps {
  keyword: string;
}

export default async function search({ keyword }: searchProps) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API}/post/search?keyword=${encodeURIComponent(
      keyword
    )}`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const res = await result.json();

  return res.data;
}
