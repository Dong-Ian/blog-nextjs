"use client";

import getAccount from "@/features/Account/services/getAccount.service";
import useUserStore from "@/features/Account/store/userStore";
import { useEffect } from "react";

export default function AppInitializer() {
  const { initialized, setInitialized, setUser } = useUserStore();

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
