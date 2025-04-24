interface EditUserInfoProps {
  data: {
    name: string;
    intro: string;
    instagramId: string;
    githubId: string;
    personalUrl: string;
  };
}

export default async function editUserInfo({ data }: EditUserInfoProps) {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API}/user/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: data.name,
        intro: data.intro,
        instagramId: data.instagramId,
        githubId: data.githubId,
        personalUrl: data.personalUrl,
      }),
    });

    const res = await result.json();

    return res;
  } catch (e) {
    console.error("editUserInfo", e);
  }
}
