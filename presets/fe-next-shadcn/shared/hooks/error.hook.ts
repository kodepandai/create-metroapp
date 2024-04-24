import { useAtomValue } from "jotai"
import { useEffect } from "react";
import { errorStore } from "shared/stores"

export const useHandleError = ()=>{
  const error = useAtomValue(errorStore);
  useEffect(()=>{
    console.log({error})
    if(error.error){
      alert(error.error.message)
    }
  }, [error])
}
