import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function UserActions(){
    const {user,login,logout,updateProfile} = useContext(UserContext)

    return(
        <>
        <div>
            <h3>Tempat Login</h3>

            {!user.isLoggedIn ? (
                <button onClick={() => login("Rayhan", "Test@gmail.com")}>Login</button>
            ) : (
                <>
                <button onClick={logout}>Logout</button>
                <button onClick={() => updateProfile({nama: "Tarmiji"})}>Update Nama</button>
                </>
            )} 
        </div>
        </>
    )
}

export default UserActions;