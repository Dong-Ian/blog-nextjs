import { useQuery } from "@tanstack/react-query";
import getAccount from "../services/getAccount.service";
import { UserInfoInterface } from "../types/Account.type";

export function useFetchUser() {
  const {
    data: userInfo,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const result = await getAccount();
      if (result.result) {
        return result.profileResult as UserInfoInterface;
      }
    },
    staleTime: 10 * 60 * 1000,
    gcTime: 20 * 60 * 1000,
  });

  return { userInfo, error, isLoading, refetch };
}
