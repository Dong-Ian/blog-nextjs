interface EditUserInfoProps {
  data: {
    name: string;
    color: string;
    title: string;
    memo: string;
    instagram: string;
    github: string;
    personalUrl: string;
  };
}

export default async function editUserInfo({ data }: EditUserInfoProps) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API}/admin/user/profile/update`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: data.name,
        color: data.color,
        title: data.title,
        memo: data.memo,
        instagram: data.instagram,
        githubUrl: data.github,
        personalUrl: data.personalUrl,
      }),
    }
  );

  const res = await result.json();

  return res;
}
