"use client";

import Typography from "@/components/atoms/Typography";
import ImageForm from "./ImageForm";
import InfoForm from "./InfoForm";

export default function AdminForm() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Typography.SubTitle1 className="mb-6 text-md font-semibold">
        회원 정보 변경
      </Typography.SubTitle1>

      <ImageForm />
      <InfoForm />
    </div>
  );
}
