import { useContext } from "react";
import { userContext } from "../context/UserContext";

export function useUserContext(){
    const context = useContext(userContext)
    if(context === undefined){
        throw new Error("useUserContext harus digunakan di dalam <UserProvider>")
    }
    return context
}

