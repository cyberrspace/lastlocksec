import { create } from "zustand";

interface AuthState {
  admin: unknown;
  token: string | null;
  setAuth: (admin: unknown, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  admin: null,
  token: null,
  setAuth: (admin, token) => set({ admin, token }),
  logout: () => set({ admin: null, token: null }),
}));
