"use client";
import Button from "@/components/atoms/Button";
import Modal from "@/components/atoms/Modal";
import getAccount from "@/features/Account/services/getAccount.service";
import useUserStore from "@/features/Account/store/userStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import editProfileImage from "../services/editProfileImage.service";

export default function ImageForm() {
  const router = useRouter();
  const { userInfo, setUser } = useUserStore();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>(new FormData());
  const [previewImage, setPreviewImage] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleEditButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onChangeImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreviewImage(reader.result as string);
      }
    };

    const newFormData = new FormData();
    newFormData.append("file", file);
    setFormData(newFormData);
  };

  const setNullImage = async () => {
    const response = await fetch("/images/nullprofile.webp");
    const blob = await response.blob();
    const file = new File([blob], "nullprofile.webp", { type: blob.type });

    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    const fileList = dataTransfer.files;

    if (fileInputRef.current) {
      fileInputRef.current.files = fileList;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreviewImage(reader.result as string);
      }
    };
  };

  const handleClick = () => {
    router.push("?modal=image");
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    router.back();
  };

  const handleImageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const reuslt = await editProfileImage({ formData });

    if (reuslt.code === "01") {
      setIsModalOpen(false);
      getAccount().then((user) => {
        setUser(user);
      });
      return;
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      setNullImage();
    }
  }, [isModalOpen]);

  return (
    <div>
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
        <Modal.Content>
          <form
            className="flex w-full flex-col  items-center justify-center"
            onSubmit={handleImageSubmit}
          >
            <div className="relative mb-[30px] size-[100px] overflow-hidden rounded-full">
              {previewImage && (
                <Image
                  alt="profile"
                  src={previewImage}
                  className="object-cover"
                  fill
                />
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                onChangeImageUpload(e);
              }}
              ref={(e) => {
                fileInputRef.current = e;
              }}
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
                onClick={setNullImage}
                type="button"
                className="w-full"
              >
                사진 삭제하기
              </Button.Default>
            </div>
            <div className="mt-5 flex gap-2">
              <Button.Default type="submit">확인</Button.Default>
              <Button.Default type="button" onClick={handleClose}>
                취소
              </Button.Default>
            </div>
          </form>
        </Modal.Content>
      </Modal>
    </div>
  );
}
