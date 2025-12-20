import UseLocalStorage from "../../hooks/useLocalStorage";

function UserName (){
    const [name, setname] = UseLocalStorage("username", "")

    return(
        <>
        <div>
            <h3>User Name</h3>
            <input type="text" placeholder="Masukkan Nama" value={name} onChange={(e) => setname(e.target.value)} />
            <p>Halo {name || "Guest"}</p>
        </div>
        </>
    )
}

export default UserName;
