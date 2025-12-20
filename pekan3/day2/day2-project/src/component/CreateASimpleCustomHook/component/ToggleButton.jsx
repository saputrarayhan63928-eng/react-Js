import useToggle from "../hooks/useToggle";

function ToggleButton (){
    const {value, toggle} = useToggle()

    return(
        <>
        <div  style={{ marginBottom: "20px" }}>
            <button onClick={toggle}>
                {value ? "Hide Text" : "Show Text"}
            </button>

            {value && <p>Teks Ini Bisa Di Sembunyikan</p>}
        </div>
        </>
    )
}

export default ToggleButton;