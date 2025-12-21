import { useState } from "react";
import FastComponent from "./FastComponent";
import SlowComponent from "./SlowComponent";

function Container(){
    const [count, setCount] = useState(0)

    return(
        <div>
            <h3>Count : {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <FastComponent/>
            <SlowComponent count={count}/>
        </div>
    )
}

export default Container