export interface EditProfileImageFunctionProps {
  formData: FormData;
}

export default async function editProfileImage({
  formData,
}: EditProfileImageFunctionProps) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API}/admin/upload/image/profile`,
      {
        method: "POST",

        body: formData,
        redirect: "follow",
        credentials: "include",
      }
    );

    const res = await result.json();

    return res;
  } catch (e) {
    console.error("editProfileImage", e);
  }
}
