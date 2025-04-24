export interface LoginFunctionProps {
  email: string;
  password: string;
}

export default async function login({ email, password }: LoginFunctionProps) {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const res = await result.json();

    return res;
  } catch (e) {
    console.error("login", e);
  }
}
