import config from "config";
import { Api } from "../api/Api";
import Cookie from "js-cookie";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient();
export const api = () => {
    const storage = Cookie.get(config.authStore) || "{}"
    const token = JSON.parse(storage)?.token
    
    return new Api({
        baseURL: config.baseUrl,
        headers: token ? {
            Authorization: `Bearer ${token}`
        } : undefined
    });
}