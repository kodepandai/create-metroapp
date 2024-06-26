import config from "config";
import { Api } from "shared/api/Api";
import { AxiosError } from "axios";
import { store, errorStore } from "shared/stores";
import { authStore } from "modules/auth/stores";

export const api = () => {
    const token = store.get(authStore).token;

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
