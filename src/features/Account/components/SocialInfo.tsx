import Typography from "@/components/atoms/Typography";
import Image from "next/image";
import Link from "next/link";
import { UserInfoInterface } from "../types/Account.type";

interface SocialInfoProps {
  userInfo: UserInfoInterface;
}
const SocialInfo = ({ userInfo }: SocialInfoProps) => {
  return (
    <div>
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
    </div>
  );
};

export default SocialInfo;
