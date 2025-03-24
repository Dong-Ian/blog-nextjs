import encrypt from "./encrypt.service";

export interface LoginFunctionProps {
  email: string;
  password: string;
}

export default async function login({ email, password }: LoginFunctionProps) {
  const encryptedEmail = encrypt({ data: email });
  const encryptedPassword = encrypt({ data: password });

  const result = await fetch(`${process.env.NEXT_PUBLIC_API}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email: encryptedEmail,
      password: encryptedPassword,
    }),
  });

  const res = await result.json();

  return res;
}
