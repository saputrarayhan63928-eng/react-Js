import { useState } from "react";

function useCounter(initialValue = 0){
    const [count, setCount] = useState(initialValue)
    
    const increment = () => setCount(pref => pref + 1)
    const decrement = () => setCount(pref => pref - 1)
    const reset = () => setCount(initialValue)

    return {count,increment,decrement,reset}
}

export default useCounter;