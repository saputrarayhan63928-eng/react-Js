import useCounter from "./useCounter";
import useToggle from "./useToggle";

function useCounterWithToggle (initialValue = 0){
    const counter = useCounter(initialValue)
    const toggle = useToggle(false)

    const incrementIfActive = () => {
        if(toggle.isOn){
            counter.increment();
        }
    }

    return{
        count: counter.count,
        isActive: toggle.isOn,
        toggleActive:toggle.toggle,incrementIfActive,
        decrement: counter.decrement,
        reset: counter.reset,
    }
}

export default useCounterWithToggle;