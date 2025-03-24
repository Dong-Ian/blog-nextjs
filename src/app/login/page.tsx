"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import login from "@/features/Login/services/login.service";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

interface LoginFormInput {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const methods = useForm<LoginFormInput>();

  const handleLogin = async (data: LoginFormInput) => {
    const result = await login({ email: data.email, password: data.password });

    if (result.code === "0000") {
      router.push("/");
      return;
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleLogin)}>
        <Input name="email" placeholder="이메일" />
        <Input name="password" placeholder="비밀번호" type="password" />
        <Button.Default>로그인</Button.Default>
      </form>
    </FormProvider>
  );
}
