"use client";

import getAccount from "@/features/Account/services/getAccount.service";
import useUserStore from "@/features/Account/stores/userStore";
import { checkToken } from "@/features/Admin/services/checkToken.service";
import useAdminStore from "@/features/Admin/stores/adminStore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AppInitializer() {
  const router = useRouter();
  const pathname = usePathname();
  const { initialized, setInitialized, setUser } = useUserStore();
  const { authInitialized, setAuthInitialized, setAuth } = useAdminStore();

  const handleCheckToken = async () => {
    const result = await checkToken();

    if (result.result) {
      return;
    }

    alert("비정상적인 접근입니다.");
    router.push("/");

    return;
  };

  const initAuth = async () => {
    const result = await checkToken();

    if (result.result) {
      setAuth();
      setAuthInitialized();
      return;
    }
  };

  useEffect(() => {
    if (pathname === "/posting" || pathname === "/admin") {
      handleCheckToken();
    }
  }, [pathname]);

  useEffect(() => {
    if (!authInitialized) {
      initAuth();
    }

    if (!initialized) {
      getAccount().then((user) => {
        setUser(user);
        setInitialized();
      });
    }
  }, [initialized]);

  return null;
}
