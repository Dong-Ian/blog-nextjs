"use client";

import Button from "@/components/atoms/Button";
import Modal from "@/components/atoms/Modal";
import { UserInfoInterface } from "@/features/Account/types/Account.type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface ImageFormProps {
  userInfo: UserInfoInterface;
}

export default function ImageForm({ userInfo }: ImageFormProps) {
  const methods = useForm();
  const router = useRouter();

  const nullimg = "/images/nullprofile.webp";

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>(new FormData());
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(
    ""
  );

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleEditButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onChangeImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const uploadFile = files ? files[0] : null;

    if (uploadFile) {
      const newFormData = new FormData();
      newFormData.append("file", uploadFile);
      setFormData(newFormData);
      console.log(formData);

      const render = new FileReader();
      render.readAsDataURL(uploadFile);
      render.onload = (e) => {
        if (render.readyState === 2) {
          const imgUrl = e.target!.result;
          setProfileImage(imgUrl);
        }
      };
    }
  };

  const handleDeleteImage = () => {
    setFormData(new FormData());
    setProfileImage("");
  };

  const handleClick = () => {
    router.push("?modal=image");
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    router.back();
  };

  // const handleSubmit = async (data: any) => {
  //   console.log(data);
  // };

  return (
    <FormProvider {...methods}>
      <form
      //  onSubmit={methods.handleSubmit(handleSubmit)}
      >
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
            onClick={handleClick}
            className="absolute bottom-3 right-5 translate-x-1/3 translate-y-1/3 rounded-full bg-white py-[22px]"
          >
            <i className="bi bi-gear text-[13px]" />
          </Button.Default>
        </div>
        <Modal isOpen={isModalOpen}>
          <Modal.Header onClose={handleClose}>
            <i className="bi i-x" />
          </Modal.Header>
          <Modal.Content className="flex flex-col items-center justify-center">
            <div>
              <div className="relative mb-[30px] size-[100px] overflow-hidden rounded-full">
                <Image
                  alt="profile"
                  src={
                    profileImage && typeof profileImage === "string"
                      ? profileImage
                      : nullimg
                  }
                  className="object-cover"
                  fill
                />
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={onChangeImageUpload}
              ref={fileInputRef}
              className="hidden"
            />
            <div className="flex w-full flex-col gap-2">
              <Button.Default
                onClick={handleEditButtonClick}
                type="button"
                className="w-full"
              >
                사진 선택하기
              </Button.Default>
              <Button.Default
                onClick={handleDeleteImage}
                type="button"
                className="w-full"
              >
                사진 삭제하기
              </Button.Default>
            </div>
            <div className="mt-5 flex gap-2">
              <Button.Default>확인</Button.Default>
              <Button.Default type="button">취소</Button.Default>
            </div>
          </Modal.Content>
        </Modal>
      </form>
    </FormProvider>
  );
}
