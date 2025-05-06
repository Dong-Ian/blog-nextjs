"use client";
import Typography from "@/components/atoms/Typography";
import Image from "next/image";
import useUserStore from "../stores/userStore";

const MobileAccountComponent = () => {
  const { userInfo, initialized } = useUserStore();

  if (!userInfo || !initialized) return null;

  return (
    <div className="mb-[30px] flex w-full border-b p-[30px]">
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
        </div>
      </div>

      {/* <div>
        <ProfileDetail icon="bi-envelope text-md">
          <Typography.P3>{userInfo.email}</Typography.P3>
        </ProfileDetail>

        <ProfileDetail icon="bi-info-circle text-md">
          <SocialInfo userInfo={userInfo} />
        </ProfileDetail>

        <ProfileDetail icon="bi-link-45deg text-lg">
          <PersonalUrl url={userInfo.personalUrl} />
        </ProfileDetail>
      </div> */}
    </div>
  );
};

export default MobileAccountComponent;
