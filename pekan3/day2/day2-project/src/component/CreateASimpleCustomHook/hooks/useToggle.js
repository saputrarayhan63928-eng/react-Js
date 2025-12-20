import { useState } from "react";

function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    const toggle = () => {
        setValue(prev => !prev);
    };

    const setOn = () =>{
        setValue(true);
    }
    const setOff = () =>{
        setValue(false);
    }

    return {value, toggle, setOn, setOff};
}

export default useToggle;
