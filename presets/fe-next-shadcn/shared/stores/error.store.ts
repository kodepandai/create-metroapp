import { atom } from "jotai";

interface Error {
  message: string;
}

type FormError = Record<string, string>;

interface ErrorStore {
  error?: Error;
  formError?: FormError;
}

export const RESET_ERROR_STORE = {
  error: undefined,
  formError: undefined,
};
export const errorStore = atom<ErrorStore>(RESET_ERROR_STORE);

