"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import getAccount from "@/features/Account/services/getAccount.service";
import useUserStore from "@/features/Account/stores/userStore";
import { checkToken } from "@/features/Admin/services/checkToken.service";
import useAdminStore from "@/features/Admin/stores/adminStore";

export default function AppInitializer() {
  const router = useRouter();
  const pathname = usePathname();
  const { initialized, setInitialized, setUser } = useUserStore();
  const { authInitialized, setAuthInitialized, setAuth } = useAdminStore();

  const handleCheckToken = async () => {
    const result = await checkToken();

    if (result.status === 200) {
      return;
    }

    alert("비정상적인 접근입니다.");
    router.push("/");

    return;
  };

  const initAuth = async () => {
    const result = await checkToken();

    if (result.status == 200) {
      setAuth(true);
      setAuthInitialized();
      return;
    }
    setAuth(false);
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
