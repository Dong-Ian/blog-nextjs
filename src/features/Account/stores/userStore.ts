import { create } from "zustand";
import { UserInfoInterface } from "../types/Account.type";

interface UserInfoState {
  initialized: boolean;
  setInitialized: () => void;
  userInfo: UserInfoInterface;
  setUser: (user: UserInfoInterface) => void;
  setProfileImage: (profileImage: string) => void;
  clearUser: () => void;
}

const initialUserInfo: UserInfoInterface = {
  userName: "",
  userId: "",
  userEmail: "",
  instagram: "",
  memo: "",
  personalUrl: "",
  title: "",
  githubUrl: "",
  color: "",
  images: {
    profileImage: "",
    backgroundImage: "",
  },
};

const useUserStore = create<UserInfoState>((set) => ({
  initialized: false,
  setInitialized: () => set({ initialized: true }),

  userInfo: initialUserInfo,

  setUser: (user) => set({ userInfo: user }),

  setProfileImage: (profileImage) =>
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        images: {
          ...state.userInfo.images,
          profileImage,
        },
      },
    })),

  clearUser: () => set({ userInfo: initialUserInfo }),
}));

export default useUserStore;
