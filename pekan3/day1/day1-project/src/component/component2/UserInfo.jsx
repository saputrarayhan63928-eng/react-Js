import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserInfo(){
    const {user} = useContext(UserContext)


    if(!user.isLoggedIn){
        return <p>User Belum Di Isi</p>
    }

    return(
        <>
        <div>
            <h3>Informasi User</h3>
            <p>Nama : {user.nama}</p>
            <p>Email : {user.email}</p>
            <p>Status : Login</p>
        </div>
        </>
    )
}

export default UserInfo;