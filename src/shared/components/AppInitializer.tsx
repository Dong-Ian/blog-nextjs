"use client";

import getAccount from "@/features/Account/services/getAccount.service";
import useUserStore from "@/features/Account/stores/userStore";
import { chcekToken } from "@/features/Admin/services/checkToken.service";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AppInitializer() {
  const router = useRouter();
  const pathname = usePathname();
  const { initialized, setInitialized, setUser } = useUserStore();

  const handleCheckToken = async () => {
    const result = await chcekToken();
    console.log(result);
    if (result.result) {
      return;
    }

    alert("비정상적인 접근입니다.");
    router.push("/");

    return;
  };

  useEffect(() => {
    handleCheckToken();
  }, [pathname]);

  useEffect(() => {
    if (!initialized) {
      getAccount().then((user) => {
        setUser(user);
        setInitialized();
      });
    }
  }, [initialized]);

  return null;
}
