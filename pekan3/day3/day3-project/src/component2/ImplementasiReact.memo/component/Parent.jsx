import Child from "./Child";
import { useState } from "react";

function Perent(){
    console.log("Perent Merender");

    const [count,setCount] = useState(0)
    const [name,setName] = useState("Rayhan")

    return(
        <>
        <div>
            <h1>Perent Component</h1>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            
            <button onClick={() => setName(name === "Rayhan" ? "Tarmiji" : "Rayhan")}>Ganti Nama</button>

            <Child name={name}/>
        </div>
        </>
    )
    
}

export default Perent