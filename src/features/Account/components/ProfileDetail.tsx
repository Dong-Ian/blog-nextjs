import { ReactNode } from "react";

interface ProfileDetailProps {
  icon: string;
  children: ReactNode;
}

const ProfileDetail = ({ icon, children }: ProfileDetailProps) => {
  return (
    <div className="flex w-[250px] items-center py-[10px]">
      <i className={`bi ${icon} mr-[30px]`} />
      <div>{children}</div>
    </div>
  );
};

export default ProfileDetail;
