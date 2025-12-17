import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header (){
    const {Theme} = useContext(ThemeContext)

    return(
        <header className={`header ${Theme}`}>
            <h1>Header ({Theme} mode)</h1>
        </header>
    )
}

export default Header