"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { AdminFormInput } from "@/app/admin/info/ClientAdminPage";
import Button from "@/components/atoms/Button";
import Modal from "@/components/atoms/Modal";
import getAccount from "@/features/Account/services/getAccount.service";
import useUserStore from "@/features/Account/stores/userStore";
import Image from "next/image";
import editProfileImage from "../services/editProfileImage.service";

import { storage } from "@/Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function ImageForm() {
  const router = useRouter();
  const { userInfo, setUser } = useUserStore();
  const [profileImage, setProfileImage] = useState<string>("");

  const methods = useForm<AdminFormInput>({
    defaultValues: {
      profileImage: "",
    },
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleEditButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleClick = () => {
    router.push("?modal=image");
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    router.back();
  };

  const uploadImageAndInsert = async (file: File) => {
    const storageRef = ref(storage, `image/${Date.now()}`);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    setProfileImage(url);
  };

  const handleImageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!profileImage) {
      alert("이미지를 선택해주세요.");
      return;
    }

    const result = await editProfileImage({ profileImage });

    if (result.status === 200) {
      setIsModalOpen(false);
      const user = await getAccount();
      setUser(user);
    }
  };

  const onChangeImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await uploadImageAndInsert(file);
  };

  const deleteProfileImage = async () => {
    const result = await editProfileImage({ profileImage: "" });

    if (result.status === 200) {
      setIsModalOpen(false);
      const user = await getAccount();
      setUser(user);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      methods.reset({
        profileImage: userInfo.profileImage,
      });
      setProfileImage(userInfo.profileImage);
    }
  }, [isModalOpen]);

  return (
    <div>
      <div className="relative">
        <div className="relative mb-[30px] size-[150px] overflow-hidden rounded-full">
          <Image
            alt="profile"
            src={userInfo.profileImage || "/images/nullprofile.webp"}
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
              (
              <Image
                alt="profile"
                src={profileImage || "/images/nullprofile.webp"}
                className="object-cover"
                fill
              />
              )
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
                onClick={deleteProfileImage}
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
