import { useContext } from "react";
import { ThameContext } from "../Context/ThemeContext";

function ThemeText(){
    const {theme} = useContext(ThameContext)

    return(
        <p style={{
        color: theme === "light" ? "#333" : "#ddd",
        backgroundColor: theme === "light" ? "#fff" : "#2a2a2a",
        padding: "10px",
        borderRadius: "4px"
      }}
        >
            Ini adalah text yg mengikuti {theme}
        </p>
    )
}

export default ThemeText;