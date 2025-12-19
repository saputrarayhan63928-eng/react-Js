import { useUserContext } from "../hooks/useUserContext";

function UserAction (){
    const {user,login,logout} = useUserContext()

    return(
        <>
        <div>
            {user ? (<button onClick={logout}>Logout</button>) : (<button onClick={() => login("Rayhan")}>Login</button>)}
        </div>
        </>
    )
}

export default UserAction;
