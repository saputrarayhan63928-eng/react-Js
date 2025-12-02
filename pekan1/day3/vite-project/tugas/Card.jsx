import React from "react";

function Card(isi){
    return(
            <div style={{ border: '1px solid black', padding: '20px', margin: '10px', borderRadius: '8px' }}>
              {isi.children} {}
              </div>
    )
}

export default Card;    