import { createContext, useState } from "react";

export const userContext = createContext(undefined)

function UserProvider ({children}){
    const [user,setUser] = useState({
        nama:"Rayhan",
        role:"admin"
    })

    const login = (nama) =>{
        setUser({nama,role:"admin"})
    }

    const logout = () =>{
        setUser(null)
    }

    return(
        <userContext.Provider value={{user,login,logout}}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider