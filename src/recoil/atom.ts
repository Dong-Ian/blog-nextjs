import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "persist-atom-key",
  storage: localStorage,
});

export const authState = atom({
  key: "authState",
  default: {
    isLoggedIn: false,
  },
  effects_UNSTABLE: [persistAtom],
});
