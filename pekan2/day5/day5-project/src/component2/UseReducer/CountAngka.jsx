import { useReducer } from "react";

function CounterScore (state, action) {
    switch (action.type) {
        case 'increment' :
            return{ count: state.count + 1}
        case 'decrement' :
            return {count: state.count - 1}
        case 'reset' :
            return {count: 0}
        default :
            throw new Error();
    }
}

function AksiReducer (){
    const [HasilState, dispatch] = useReducer(CounterScore, {count: 0})

    return(
        <>
        <div>
            <h2>Hitung Score</h2>
            <p>Count : {HasilState.count}</p>
            <button onClick={() => dispatch({ type: 'increment'})}>Tambah</button>
            <button onClick={() => dispatch({ type: 'decrement'})}>Kurang</button>
            <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
        </div>
        </>
    )
}

export default AksiReducer