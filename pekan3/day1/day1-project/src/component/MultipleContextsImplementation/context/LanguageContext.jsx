import { createContext, useState } from "react";

export const LanguageContext = createContext();

function LanguageProvider ({children}){
    const [language, setLanguage] = useState("id");

    const toggleLanguage = () => { setLanguage (prev => (prev === "id" ? "en" : "id"))}

    return(
        <LanguageContext.Provider value={{language,toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;