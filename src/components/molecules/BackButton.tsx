"use client";

import { useRouter } from "next/navigation";
import Typography from "../atoms/Typography";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div
      className="flex cursor-pointer items-center gap-2 pb-[30px] transition-all hover:text-gray-500"
      onClick={handleBack}
    >
      <i className="bi bi-arrow-left text-[20px]" />
      <Typography.P3 className="text-[16px]">뒤로가기</Typography.P3>
    </div>
  );
};

export default BackButton;
