"use client";

import Button from "@/components/atoms/Button";
import { UserInfoInterface } from "@/features/Account/types/Account.type";
import Image from "next/image";

interface ImageFormProps {
  userInfo: UserInfoInterface;
}

export default function ImageForm({ userInfo }: ImageFormProps) {
  return (
    <>
      <div className="relative mb-[30px] size-[150px] overflow-hidden rounded-full">
        <Image
          alt="profile"
          src={userInfo.images.profileImage}
          className="object-cover"
          fill
        />
      </div>
      <div className="mb-9 flex gap-2">
        <Button.Default className="rounded-full border border-black hover:bg-black hover:text-white">
          사진 선택하기
        </Button.Default>
        <Button.Default className="rounded-full border border-black hover:bg-black hover:text-white">
          사진 삭제하기
        </Button.Default>
      </div>
    </>
  );
}
