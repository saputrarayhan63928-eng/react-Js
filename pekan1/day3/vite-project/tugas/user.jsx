import React from "react";
import Avatar from "./Avatar";

function User(user){
    return(
        <div style={{ border: '1px solid #000', padding: '15px', margin: '10px' }}>
            <Avatar url={user.foto} />
            <h2>{user.nama}</h2>
            </div>
    )
}

export default User;