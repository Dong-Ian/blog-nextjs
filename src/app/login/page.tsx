"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Typography from "@/components/atoms/Typography";
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
      <form
        onSubmit={methods.handleSubmit(handleLogin)}
        className="m-auto mt-[150px] flex w-[90%] max-w-[700px] flex-col items-center justify-center gap-2 rounded-xl border border-solid p-[40px]"
      >
        <div className="mb-[10px] flex w-full flex-col justify-start gap-2">
          <Typography.P3 className="ml-1 w-[80px]">이메일</Typography.P3>
          <Input
            name="email"
            placeholder="이메일"
            className="mb-[-10px] ml-[-15px] w-full border-none outline-none placeholder:text-gray-500"
            required
          />
          <div className="border-b " />
        </div>
        <div className="flex w-full flex-col justify-start gap-2">
          <Typography.P3 className="ml-1 w-[80px]">비밀번호</Typography.P3>
          <Input
            name="password"
            placeholder="비밀번호"
            type="password"
            className="mb-[-10px] ml-[-15px] w-full border-none outline-none placeholder:text-gray-500"
            required
          />
          <div className="border-b " />
        </div>
        <Button.Default className="mt-[30px] w-full rounded-full transition-all hover:bg-gray-100">
          로그인
        </Button.Default>
      </form>
    </FormProvider>
  );
}
