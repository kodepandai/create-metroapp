import config from "config";
import { Api } from "../api/Api";
import Cookie from "js-cookie";
import { QueryClient } from "react-query";
import { AxiosError } from "axios";
import { store, errorStore } from "shared/stores";

export const queryClient = new QueryClient();
export const api = () => {
    const storage = Cookie.get(config.authStore) || "{}";
    const token = JSON.parse(storage)?.token;

    return new Api({
        baseURL: config.baseUrl,
        headers: token
            ? {
                Authorization: `Bearer ${token}`,
            }
            : undefined,
    });
};

export const handleApiError = (err: unknown) => {
    if (err instanceof AxiosError) {
        const { response } = err;
        if (response?.status === 422) {
            store.set(errorStore, {
                formError: response.data.errors,
                error: {
                    message: response.data.message|| err.message
                },
            });
        } else {
            store.set(errorStore, {
                error: {
                    message: response?.data.message || err.message
                },
            });
        }
    }
    throw err;
};
