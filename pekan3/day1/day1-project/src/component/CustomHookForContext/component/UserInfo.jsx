import { useUserContext } from "../hooks/useUserContext";

function UserInfo(){
    const { user } = useUserContext()
    
    if(!user){
        return <p>User Belum Login</p>
    }

    return(
        <>
        <div>
            <h4>Nama: {user.nama}</h4>
            <h4>Role: {user.role}</h4>
        </div>
        </>
    )
}


export default UserInfo