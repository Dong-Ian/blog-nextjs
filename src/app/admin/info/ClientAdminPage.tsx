"use client";
import Typography from "@/components/atoms/Typography";
import SideBar from "@/features/Admin/components/SideBar";
import ImageForm from "@/features/Admin/form/ImageForm";
import InfoForm from "@/features/Admin/form/InfoForm";

export interface AdminFormInput {
  name: string;
  intro: string;
  instagramId: string;
  githubId: string;
  personalUrl: string;
  profileImage: string;
}

const ClientAdminPage = () => {
  return (
    <div className="flex h-screen w-full justify-center  md:pl-[230px]">
      <SideBar />

      <div className="mt-[100px] flex w-full flex-col items-center">
        <Typography.SubTitle1 className="mb-6 text-md font-semibold">
          회원 정보 변경
        </Typography.SubTitle1>

        <ImageForm />
        <InfoForm />
      </div>
    </div>
  );
};

export default ClientAdminPage;
