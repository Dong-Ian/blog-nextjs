// export default async function getAccount() {
//   const result = await fetch(
//     `${process.env.NEXT_PUBLIC_API_TEST}/user/profile`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         BlogId: process.env.NEXT_PUBLIC_BLOG_ID!,
//       },
//     }
//   );

//   const res = await result.json();

//   return res.profileResult;
// }

export default async function getAccount() {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API}/user/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        blogId: process.env.NEXT_PUBLIC_BLOG_ID!,
      }),
    });

    const res = await result.json();

    return res.profileResult;
  } catch (e) {
    console.error("getAccount", e);
  }
}
