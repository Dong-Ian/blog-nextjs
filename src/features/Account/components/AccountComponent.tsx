"use client";
import Divider from "@/components/atoms/Divider";
import Typography from "@/components/atoms/Typography";
import Image from "next/image";
import { useFetchUser } from "../hooks/useFetchUser";

const AccountComponent = () => {
  const { userInfo } = useFetchUser();

  if (!userInfo) return <div>error</div>;
  return (
    <div className="flex w-[500px] flex-col items-center justify-center p-[30px]">
      <div className="relative size-[100px] overflow-hidden rounded-full">
        <Image
          alt="profile"
          src={userInfo.images.profileImage}
          className="object-cover"
          fill
        />
      </div>
      <Typography.SubTitle1>{userInfo.userName}</Typography.SubTitle1>
      <Typography.P3>{userInfo.memo}</Typography.P3>
      <Divider />
    </div>
  );
};

export default AccountComponent;
