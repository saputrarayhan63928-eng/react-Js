import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeToggleButton(){
    const {ToggleTheme} = useContext(ThemeContext)

    return(
        <button onClick={ToggleTheme}>
            Ganti Tema
        </button>
    )
}

export default ThemeToggleButton
