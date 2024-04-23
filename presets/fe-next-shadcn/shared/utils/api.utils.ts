import config from "config";
import { Api } from "../api/Api";
import Cookie from "js-cookie";

const api = () => {
    const storage = Cookie.get(config.authStore) || "{}"
    const token = JSON.parse(storage)?.token
    
    const api = new Api({
        baseURL: config.baseUrl,
        headers: token ? {
            Authorization: `Bearer ${token}`
        } : undefined
    }, );

    return {...api}
}

export default api
