import config from "config";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import Cookie from "js-cookie";
interface User {
  username: string;
  email: string;
}

interface AuthStore {
  token?: string;
  user?: User;
}

export const authStore = atomWithStorage<AuthStore>(
  config.authStore,
  {
    token: undefined,
    user:undefined
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
);
export const isAuthenticateStore = atom((get) => !!get(authStore).user);

export const currentUserStore = atom((get) => {
  return get(authStore).user
});
