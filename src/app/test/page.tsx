"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Typography from "@/components/atoms/Typography";
import { FormProvider, useForm } from "react-hook-form";

interface FormData {
  test: string;
}

export default function Test() {
  const methods = useForm<FormData>();
  const { watch } = methods;

  const [test] = watch(["test"]);

  const onSubmit = (data: FormData) => {
    console.log("data", data);
  };

  return (
    <div className="justify-center">
      <Typography.Head1>Head1</Typography.Head1>
      <Typography.Head2>Head2</Typography.Head2>
      <Typography.Head3>Head3</Typography.Head3>
      <Typography.SubTitle1>SubTitle1</Typography.SubTitle1>
      <Typography.P1>P1</Typography.P1>
      <Typography.P2>P2</Typography.P2>
      <Typography.P3>P3</Typography.P3>
      <Button.Default>Test Button</Button.Default>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex gap-[10px]">
            <Input name="test"></Input>
            <Button.Default active={!!test} disabled={!test}>
              확인
            </Button.Default>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
