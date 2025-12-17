import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Content (){
    const {Theme} = useContext(ThemeContext)

    return(
        <main className={`content ${Theme}`}>
            <p>Konten ini mengikuti tema.</p>
        </main>
    )
}

export default Content