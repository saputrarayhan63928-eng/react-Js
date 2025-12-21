import { useState } from "react";
import Child from "./Child";

function ParentWithoutCallback() {
  console.log("🔁 Parent WITHOUT useCallback rendered");

  const [count, setCount] = useState(0);
  const [name, setName] = useState("Rayhan");

  // ⚠️ function baru setiap render
  const handleClick = () => {
    console.log("Child button clicked");
  };

  return (
    <div>
      <h2>Without useCallback</h2>
      <p>Count: {count}</p>
      <p>Name : {name}</p>

      <button onClick={() => setCount(c => c + 1)}>
        Increment Count
      </button>

      <button onClick={() => setName(n => n === "Rayhan" ? "Tarmiji" : "Rayhan")}>
        Change Name
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default ParentWithoutCallback;