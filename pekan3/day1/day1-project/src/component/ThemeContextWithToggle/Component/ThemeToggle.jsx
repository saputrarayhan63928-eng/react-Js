import { useContext } from "react";
import { ThameContext } from "../Context/ThemeContext";

function StyleToggle (){
    const {theme, toggleTheme} = useContext(ThameContext)

    return(
        <button onClick={toggleTheme}
                 style={{
        padding: "10px 16px",
        marginBottom: "16px",
        backgroundColor: theme === "light" ? "#222" : "#eee",
        color: theme === "light" ? "#fff" : "#222",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"}}
        >
            Ganti ke {theme === 'light' ? 'dark' : 'light'} mode
        </button>
    )
}

export default StyleToggle;
