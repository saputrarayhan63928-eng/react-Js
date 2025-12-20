import UseLocalStorage from "../../hooks/useLocalStorage";


function ToggleTheme(){
    const [theme, setTheme] = UseLocalStorage("theme", "light")
    
    function ThemeToggle (){
        setTheme(prev => (prev === "light" ? "dark" : "light"))
    }

    return(
        <>
        <div   style={{
        background: theme === "dark" ? "#222" : "#eee",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "1rem",
        marginBottom: "1rem"
      }}>
            <p>Theme Saat Ini : {theme}</p>
            <button onClick={ThemeToggle}>Ganti Tema</button>
        </div>
        </>
    )
}

export default ToggleTheme