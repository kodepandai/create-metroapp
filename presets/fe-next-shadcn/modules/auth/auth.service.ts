import { RESET_ERROR_STORE, errorStore, store } from "shared/stores";
import { authStore } from "./stores";

export interface LoginParam {
  email: string;
  password: string;
}
export const authenticate = (param: LoginParam) => {
  // TODO: this is dummy login action
  let errors: Record<string,string> = {}
  if(!param.email){
    errors["email"] = "Email harus diisi"
  }
  if(!param.password){
    errors["password"] = "Password harus diisi"
  }
  store.set(errorStore, {formError: errors})
  if (!(param.email === "admin@mail.com" && param.password === "password")) return false;
  store.set(errorStore, RESET_ERROR_STORE)
  store.set(authStore, {
    user: {
      username: param.email.split("@")[0],
      email: param.email,
    },
    token: "123",
  });
  return true;
};
