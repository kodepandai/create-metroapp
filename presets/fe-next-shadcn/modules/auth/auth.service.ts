import { store } from "shared/store";
import { authStore } from "./store";

export interface LoginParam {
  email: string;
  password: string;
}
export const authenticate = (param: LoginParam) => {
  // TODO: this is dummy login action
  if (param.email === "admin@mail.com" && param.password === "password") return false;
  store.set(authStore, {
    user: {
      username: param.email.split("@")[0],
      email: param.email,
    },
    token: "123",
  });
  return true;
};
