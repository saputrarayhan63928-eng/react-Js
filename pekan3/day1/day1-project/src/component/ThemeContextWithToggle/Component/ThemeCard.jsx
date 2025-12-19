import { useContext } from "react";
import { ThameContext } from "../Context/ThemeContext";

function ThemeCard (){
    const {theme} = useContext(ThameContext)

      const style = {
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "16px",
    backgroundColor: theme === "light" ? "#f5f5f5" : "#1e1e1e",
    color: theme === "light" ? "#111" : "#eee",
    boxShadow:
      theme === "light"
        ? "0 4px 8px rgba(0,0,0,0.1)"
        : "0 4px 8px rgba(0,0,0,0.6)"
  };

  return(
    <div style={style}>
        <h3>Theme Card</h3>
        <p>Card Ini berubah mengikuti tema</p>
    </div>
  )
}

export default  ThemeCard;