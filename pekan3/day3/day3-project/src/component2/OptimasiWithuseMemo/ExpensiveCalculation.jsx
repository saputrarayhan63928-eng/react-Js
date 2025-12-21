import { useState, useMemo } from "react";

function expensiveCalculation (number){
 console.log("Expensive calculation running...");
let result = 0 

for(let i = 0 ; i < 100_000_000; i++){
    result += number;
}

    return result;
}

function ExpensiveCalculation (){
    console.log("Component rendered");
    
    const [count, setCount] = useState(0)
    const [name,setName] = useState("Rayhan")

    const CalculatedValue = useMemo(() => {
        return expensiveCalculation(count)
    }, [count])

    return(
        <>
        <div style={{ border: "2px solid black", padding: "10px" }}>
            <h2>Expensive Calculation</h2>

            <p>Result : {CalculatedValue}</p>

            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setName(name === "Rayhan" ? "Tarmiji" : "Rayhan")}>Ganti Nama</button>

            <h3>Name : {name}</h3>
        </div>
        </>
    )
}

export default ExpensiveCalculation