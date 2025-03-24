import Divider from "@/components/atoms/Divider";
import Typography from "@/components/atoms/Typography";
import Image from "next/image";
import getAccount from "../services/getAccount.service";
import PersonalUrl from "./PersonalUrl";
import ProfileDetail from "./ProfileDetail";
import SocialInfo from "./SocialInfo";

const AccountComponent = async () => {
  const userInfo = await getAccount();

  console.log(userInfo);
  if (!userInfo) return <div>error</div>;
  return (
    <div className="flex w-[400px] flex-col items-center justify-center p-[30px]">
      <div className="relative mb-[30px] size-[150px] overflow-hidden rounded-full">
        <Image
          alt="profile"
          src={userInfo.images.profileImage}
          className="object-cover"
          fill
        />
      </div>
      <div className="mb-[20px] flex flex-col items-center gap-1">
        <Typography.SubTitle1 className="text-[30px] font-bold">
          {userInfo.userName}
        </Typography.SubTitle1>
        <Typography.P2>{userInfo.memo}</Typography.P2>
      </div>

      <ProfileDetail title="이메일 정보">
        <Typography.P3>{userInfo.userEmail}</Typography.P3>
      </ProfileDetail>
      <Divider width={95} />
      <ProfileDetail title="소셜 정보">
        <SocialInfo userInfo={userInfo} />
      </ProfileDetail>
      <Divider width={95} />
      <ProfileDetail title="링크">
        <PersonalUrl url={userInfo.personalUrl} />
      </ProfileDetail>
    </div>
  );
};

export default AccountComponent;
