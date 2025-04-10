import { create } from "zustand";

interface AdminState {
  auth: boolean;
  authInitialized: boolean;
  setAuth: () => void;
  setAuthInitialized: () => void;
}

const useAdminStore = create<AdminState>((set) => ({
  auth: false,
  authInitialized: false,
  setAuth: () => set({ auth: true }),
  setAuthInitialized: () => set({ authInitialized: true }),
}));

export default useAdminStore;
