import { useRouter } from "next/navigation";

interface LoginParam {
  email: string;
  password: string;
}
const useAuth = ()=>{
  const router = useRouter()
  const login = async (param: LoginParam) => {
    router.replace("/")
  };
  return {
    login
  }
}
