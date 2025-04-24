export interface EditProfileImageFunctionProps {
  profileImage: string;
}

export default async function editProfileImage({
  profileImage,
}: EditProfileImageFunctionProps) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API}/user/update/profileimage`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          profileImage: profileImage,
        }),
      }
    );

    const res = await result.json();

    return res;
  } catch (e) {
    console.error("editProfileImage", e);
  }
}
