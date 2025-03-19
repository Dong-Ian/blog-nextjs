import Typography from "@/components/atoms/Typography";
import { ReactNode } from "react";

interface ProfileDetailProps {
  title: string;
  children: ReactNode;
}

const ProfileDetail = ({ title, children }: ProfileDetailProps) => {
  return (
    <div className="flex w-[340px] items-center py-[10px]">
      <Typography.P3 className="w-[130px] font-semibold">{title}</Typography.P3>
      <div>{children}</div>
    </div>
  );
};

export default ProfileDetail;
