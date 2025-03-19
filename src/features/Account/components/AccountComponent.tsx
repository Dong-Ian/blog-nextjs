"use client";
import Divider from "@/components/atoms/Divider";
import Typography from "@/components/atoms/Typography";
import Image from "next/image";
import Link from "next/link";
import { useFetchUser } from "../hooks/useFetchUser";
import PersonalUrl from "./PersonalUrl";
import ProfileDetail from "./ProfileDetail";

const AccountComponent = () => {
  const { userInfo } = useFetchUser();

  if (!userInfo) return <div>error</div>;
  return (
    <div className="flex w-[500px] flex-col items-center justify-center p-[30px]">
      <div className="relative mb-[30px] size-[120px] overflow-hidden rounded-full">
        <Image
          alt="profile"
          src={userInfo.images.profileImage}
          className="object-cover"
          fill
        />
      </div>
      <div className="mb-[20px] flex flex-col items-center gap-1">
        <Typography.SubTitle1>{userInfo.userName}</Typography.SubTitle1>
        <Typography.P3>{userInfo.memo}</Typography.P3>
      </div>

      <ProfileDetail title="이메일 정보">
        <Typography.P3>{userInfo.userEmail}</Typography.P3>
      </ProfileDetail>
      <Divider />
      <ProfileDetail title="소셜 정보">
        <div className="flex gap-3">
          <Image
            src="/icon/github.png"
            alt="GitHub Icon"
            width={15}
            height={15}
            style={{ objectFit: "contain" }}
          />
          <Link
            className="transition-all hover:text-sky-400"
            href={`https://github.com/${userInfo.githubUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography.P3>{userInfo.githubUrl}</Typography.P3>
          </Link>
        </div>
        <div className="flex gap-3">
          <Image
            src="/icon/instagram.webp"
            alt="Instagram Icon"
            width={15}
            height={15}
            style={{ objectFit: "contain" }}
          />
          <Link
            className="transition-all hover:text-sky-400"
            href={`https://instagram.com/${userInfo.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography.P3>{userInfo.instagram}</Typography.P3>
          </Link>
        </div>
      </ProfileDetail>
      <Divider />
      <ProfileDetail title="링크">
        <PersonalUrl url={userInfo.personalUrl} />
      </ProfileDetail>
    </div>
  );
};

export default AccountComponent;
