import api from "shared/utils/api.utils"
import useSWR from "swr"

const useApi = () => {
    const {auth} = api();
    const swr = useSWR(auth.authControllerLogin)
}