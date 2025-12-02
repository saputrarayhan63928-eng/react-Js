import React from "react";

function Avatar(foto){
    return(
        <div>
            <img src={foto.url} alt="Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
        </div>
    )
}

export default Avatar;