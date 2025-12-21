import React from "react";

function Child({onClick}){
    console.log("Child Di render");
    
    return(
        <div style={{ border: "2px solid blue", padding: "8px" }}>
            <button onClick={onClick}>Click Child Button</button>
        </div>
    )
}

export default React.memo(Child);