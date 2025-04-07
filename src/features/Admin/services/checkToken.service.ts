export async function chcekToken() {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API}/admin/token/check`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const res = await result.json();

  return res;
}
