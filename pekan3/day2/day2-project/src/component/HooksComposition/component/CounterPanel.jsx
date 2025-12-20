import useCounterWithToggle from "../hooks/useCounterWithToggle";

function CounterPanel (){
    const  {count,isActive,toggleActive,decrement,reset,incrementIfActive} =  useCounterWithToggle(0)

    return(
        <>
        <div>
            <h3>Count : {count}</h3>
            <p>Status : {isActive ? "Active" : "Inactive"}</p>

            <button onClick={toggleActive}>{isActive ? "Deactivate" : "Activate"}</button>
            <br /><br />
            <button onClick={incrementIfActive}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
        </>
    )
}

export default CounterPanel;
