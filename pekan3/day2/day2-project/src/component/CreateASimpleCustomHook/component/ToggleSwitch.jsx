import useToggle from "../hooks/useToggle";

function ToggleSwitch (){
    const {value, setOff,setOn} = useToggle()

    return(
        <>
        <div>
            <p>Status {value ? "On" : "Off"} </p>

                {value ?
                 (<button onClick={setOff}>Switch ON</button>)
                 :
                 (<button onClick={setOn}>Switch OFF</button>) }
        </div>
        </>
    )
}

export default ToggleSwitch;
