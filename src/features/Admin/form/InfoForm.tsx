"use client";

import { AdminFormInput } from "@/app/admin/info/ClientAdminPage";
import Button from "@/components/atoms/Button";
import getAccount from "@/features/Account/services/getAccount.service";
import useUserStore from "@/features/Account/stores/userStore";
import InputRow from "@/features/Admin/components/InputRow";
import editUserInfo from "@/features/Admin/services/editUserInfo.service";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function InfoForm() {
  const { userInfo, setUser } = useUserStore();
  const methods = useForm<AdminFormInput>({
    defaultValues: {
      name: "",
      intro: "",
      instagramId: "",
      githubId: "",
      personalUrl: "",
      profileImage: "",
    },
  });

  useEffect(() => {
    if (userInfo) {
      methods.reset({
        name: userInfo.name,
        intro: userInfo.intro,
        instagramId: userInfo.instagramId,
        githubId: userInfo.githubId,
        personalUrl: userInfo.personalUrl,
        profileImage: userInfo.profileImage,
      });
    }
  }, [userInfo, methods]);

  const handleSubmit = async (data: AdminFormInput) => {
    const result = await editUserInfo({ data });

    if (result.status === 200) {
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
    <FormProvider {...methods}>
      <form
        className="flex flex-col items-center"
        onSubmit={methods.handleSubmit(handleSubmit)}
      >
        <div className="mb-[30px] flex flex-col gap-2">
          <InputRow name="name" title="NAME" placeholder={userInfo.name} />
          <InputRow name="intro" title="MEMO" placeholder={userInfo.intro} />
          <InputRow
            name="personalUrl"
            title="URL"
            placeholder={userInfo.personalUrl}
          />
          <InputRow
            name="instagramId"
            title="Instagram"
            placeholder={userInfo.instagramId}
          />
          <InputRow
            name="githubId"
            title="GitHub"
            placeholder={userInfo.githubId}
          />
        </div>
        <Button.Default className="rounded-full border border-black hover:bg-black hover:text-white">
          정보 변경하기
        </Button.Default>
      </form>
    </FormProvider>
  );
}
