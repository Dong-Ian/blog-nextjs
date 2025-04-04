"use client";

import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import getAccount from "@/features/Account/services/getAccount.service";
import useUserStore from "@/features/Account/store/userStore";
import InputRow from "@/features/Admin/components/InputRow";
import editUserInfo from "@/features/Admin/services/editUserInfo.service";
import { FormProvider, useForm } from "react-hook-form";
import ImageForm from "./ImageForm";

interface AdminFormInput {
  name: string;
  title: string;
  memo: string;
  instagram: string;
  github: string;
  personalUrl: string;
  color: string;
  image: FileList | null;
}

export default function AdminForm() {
  const { userInfo, setUser } = useUserStore();

  const methods = useForm({
    defaultValues: {
      name: userInfo.userName,
      title: userInfo.title,
      memo: userInfo.memo,
      instagram: userInfo.instagram,
      github: userInfo.githubUrl,
      personalUrl: userInfo.personalUrl,
      color: userInfo.color,
      image: null,
    },
  });

  const handleSubmit = async (data: AdminFormInput) => {
    const result = await editUserInfo({ data });

    if (result.code === "01") {
      alert("회원정보 변경이 완료되었습니다.");
      getAccount().then((user) => {
        setUser(user);
      });
      return;
    }

    alert(
      "일시적 오류로 정보가 변경되지 않았습니다.\n잠시 후 다시 시도해주세요"
    );
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <Typography.SubTitle1 className="mb-6 text-md font-semibold">
        회원 정보 변경
      </Typography.SubTitle1>

      <ImageForm userInfo={userInfo} />
      <FormProvider {...methods}>
        <form
          className="flex flex-col items-center"
          onSubmit={methods.handleSubmit(handleSubmit)}
        >
          <div className="mb-[30px] flex flex-col gap-2">
            <InputRow
              name="name"
              title="NAME"
              placeholder={userInfo.userName}
            />
            <InputRow name="title" title="TITLE" placeholder={userInfo.title} />
            <InputRow name="memo" title="MEMO" placeholder={userInfo.memo} />
            <InputRow
              name="personalUrl"
              title="URL"
              placeholder={userInfo.personalUrl}
            />
            <InputRow
              name="instagram"
              title="Instagram"
              placeholder={userInfo.instagram}
            />
            <InputRow
              name="github"
              title="GitHub"
              placeholder={userInfo.githubUrl}
            />
          </div>
          <Button.Default className="rounded-full border border-black hover:bg-black hover:text-white">
            정보 변경하기
          </Button.Default>
        </form>
      </FormProvider>
    </div>
  );
}
