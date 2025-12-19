import { createContext, useState } from "react";

export const ThameContext = createContext(null)

function ThameProvider ({children}){
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))    
    }

    return(
        <ThameContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThameContext.Provider>
    )
}


export default ThameProvider;
