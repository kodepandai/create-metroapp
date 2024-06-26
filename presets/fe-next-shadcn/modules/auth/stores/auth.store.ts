import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import Cookie from "js-cookie";

interface AuthStore {
  token?: string;
}

export const authStore = atomWithStorage<AuthStore>(
  "authStore",
  {
    token: undefined,
  },
  {
    setItem(key, value) {
      Cookie.set(key, JSON.stringify(value), {
        expires: 365, // TODO: api harusnya menyertakan expires
        sameSite: "strict",
      });
    },
    removeItem(key) {
      Cookie.remove(key);
    },
    getItem(key, initialValue) {
      const cookieValue = Cookie.get(key);
      if (!cookieValue) return initialValue;
      try {
        return JSON.parse(cookieValue);
      } catch (e) {
        return initialValue;
      }
    },
  },
  {
    getOnInit: true,
  }
);
export const isAuthenticateStore = atom((get) => !!get(authStore).token);
