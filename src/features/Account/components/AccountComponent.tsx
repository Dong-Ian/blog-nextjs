"use client";
import Divider from "@/components/atoms/Divider";
import Typography from "@/components/atoms/Typography";
import Image from "next/image";
import useUserStore from "../stores/userStore";
import PersonalUrl from "./PersonalUrl";
import ProfileDetail from "./ProfileDetail";
import SocialInfo from "./SocialInfo";

const AccountComponent = () => {
  const { userInfo, initialized } = useUserStore();

  if (!userInfo || !initialized) return null;

  return (
    <div className="flex w-[400px] flex-col items-center justify-center p-[30px]">
      <div className="relative mb-[30px] size-[200px] overflow-hidden rounded-full transition-all lg:size-[250px]">
        {userInfo.profileImage && (
          <Image
            alt="profile"
            src={userInfo.profileImage}
            className="object-cover"
            fill
          />
        )}
      </div>
      <div className="mb-[20px] flex flex-col items-center gap-1">
        <Typography.SubTitle1 className="text-[30px] font-bold">
          {userInfo.name}
        </Typography.SubTitle1>
        <Typography.P2>{userInfo.intro}</Typography.P2>
      </div>

      <ProfileDetail icon="bi-envelope text-md">
        <Typography.P3>{userInfo.email}</Typography.P3>
      </ProfileDetail>
      <Divider width={80} />
      <ProfileDetail icon="bi-info-circle text-md">
        <SocialInfo userInfo={userInfo} />
      </ProfileDetail>
      <Divider width={80} />
      <ProfileDetail icon="bi-link-45deg text-lg">
        <PersonalUrl url={userInfo.personalUrl} />
      </ProfileDetail>
    </div>
  );
};

export default AccountComponent;
