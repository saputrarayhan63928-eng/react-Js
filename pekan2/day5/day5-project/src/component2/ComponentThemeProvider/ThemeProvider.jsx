import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeProvider ({childern}){
    const [Theme, SetTheme] = useState("light")

    const ToggleTheme = () =>{
        SetTheme ((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    return(
        <ThemeContext.Provider value={{ Theme, ToggleTheme}}>
            {childern}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider