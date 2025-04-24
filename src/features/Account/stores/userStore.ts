import { create } from "zustand";
import { UserInfoInterface } from "../types/Account.type";

interface UserInfoState {
  initialized: boolean;
  setInitialized: () => void;
  userInfo: UserInfoInterface;
  setUser: (user: UserInfoInterface) => void;
  clearUser: () => void;
}

const initialUserInfo: UserInfoInterface = {
  name: "",
  id: "",
  email: "",
  intro: "",
  instagramId: "",
  personalUrl: "",
  githubId: "",
  profileImage: "",
};

const useUserStore = create<UserInfoState>((set) => ({
  initialized: false,
  setInitialized: () => set({ initialized: true }),

  userInfo: initialUserInfo,

  setUser: (user) => set({ userInfo: user }),

  clearUser: () => set({ userInfo: initialUserInfo }),
}));

export default useUserStore;
