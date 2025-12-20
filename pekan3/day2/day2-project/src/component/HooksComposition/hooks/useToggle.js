import { useState } from "react";

function useToggle (initialValue = false){
    const [isOn, setIsOn] = useState(initialValue)

    const toggle = () => setIsOn(pref => !pref)
    const setOn = () => setIsOn(true)
    const setOff = () => setIsOn(false)

    return {isOn, toggle , setOff , setOn}
}

export default useToggle;