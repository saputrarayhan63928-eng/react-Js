import { useState, useCallback } from "react";
import Child from "./Child";

function ParentWithCallback() {
  console.log("Parent WITH useCallback rendered");

  const [name, setName] = useState("Rayhan");
  const [count, setCount] = useState(0);

  const HandleClick = useCallback(() => {
    console.log("Child Button Di Klik");
  }, []);

  return (
    <div>
      <h2>With useCallback</h2>
      <p>Count : {count}</p>

      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>

      <button
        onClick={() => setName((n) => (n === "Rayhan" ? "Tarmiji" : "Rayhan"))}
      >
        Change Name
      </button>

      <Child onClick={HandleClick}/>
    </div>
  );
}

export default ParentWithCallback