import { createContext, useState } from "react";

export const UserContext = createContext(null)

function UserProfile ({children}){
    const [user,setUser] = useState({
        nama: "",
        email:"",
        isLoggedIn: false
    })


const login = (nama,email) =>{
    setUser({
        nama,
        email,
        isLoggedIn: true
    })
}

const logout = () =>{
    setUser({
        nama: "",
        email: "",
        isLoggedIn: false
    })
}

const updateProfile = (newData) =>{
    setUser(prevUser =>({
        ...prevUser,...newData
    }))
}

return(
    <UserContext.Provider value={{user,login,logout,updateProfile}}>
        {children}
    </UserContext.Provider>
)
}

export default UserProfile;