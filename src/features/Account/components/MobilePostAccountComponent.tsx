"use client";
import Typography from "@/components/atoms/Typography";
import Image from "next/image";
import Link from "next/link";
import useUserStore from "../stores/userStore";

const MobilePostAccountComponent = () => {
  const { userInfo, initialized } = useUserStore();

  if (!userInfo || !initialized) return null;

  return (
    <div className="m-auto flex w-full flex-col">
      <div className="flex w-full border-b p-[30px]">
        <div className="m-auto flex flex-col items-center gap-10 px-7 sm:m-0 sm:flex-row">
          <div className="relative size-[120px] overflow-hidden rounded-full">
            {userInfo.profileImage && (
              <Image
                alt="profile"
                src={userInfo.profileImage}
                className="object-cover"
                fill
              />
            )}
          </div>
          <div className="mb-[20px] flex flex-col items-center gap-1  sm:items-start">
            <Typography.SubTitle1 className="text-[20px] font-bold">
              {userInfo.name}
            </Typography.SubTitle1>
            <Typography.P2>{userInfo.intro}</Typography.P2>
            <Typography.P3 className="text-gray-500">
              {userInfo.email}
            </Typography.P3>
          </div>
        </div>
      </div>
      <div className="mb-4 flex w-full justify-center gap-6 border-b px-[60px] py-[30px] sm:justify-start">
        <Link
          href={userInfo.personalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-link-45deg text-lg" />
        </Link>
        <Link
          href={`https://github.com/${userInfo.githubId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github text-lg" />
        </Link>
        <Link
          href={`https://instagram.com/${userInfo.instagramId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-instagram text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default MobilePostAccountComponent;
