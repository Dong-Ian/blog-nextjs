import { create } from "zustand";

interface AdminState {
  auth: boolean;
  authInitialized: boolean;
  setAuth: (state: boolean) => void;
  setAuthInitialized: () => void;
}

const useAdminStore = create<AdminState>((set) => ({
  auth: false,
  authInitialized: false,
  setAuth: (state) => set({ auth: state }),
  setAuthInitialized: () => set({ authInitialized: true }),
}));

export default useAdminStore;
