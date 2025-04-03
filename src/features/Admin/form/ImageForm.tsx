"use client";

import Button from "@/components/atoms/Button";
import { UserInfoInterface } from "@/features/Account/types/Account.type";
import Image from "next/image";
// import { useRef } from "react";

interface ImageFormProps {
  userInfo: UserInfoInterface;
}

export default function ImageForm({ userInfo }: ImageFormProps) {
  // const fileInputRef = useRef<HTMLInputElement | null>(null);

  // const handleEditButtonClick = () => {
  //   if (fileInputRef.current) {
  //     fileInputRef.current.click();
  //   }
  // };

  return (
    <div className="relative">
      <div className="relative mb-[30px] size-[150px] overflow-hidden rounded-full">
        <Image
          alt="profile"
          src={userInfo.images.profileImage}
          className="object-cover"
          fill
        />
      </div>
      <Button.Default
        type="button"
        className="absolute bottom-10 right-5 translate-x-1/3 translate-y-1/3 rounded-full bg-white py-[22px]"
      >
        <i className="bi bi-gear text-[13px]" />
      </Button.Default>
    </div>
  );
}
