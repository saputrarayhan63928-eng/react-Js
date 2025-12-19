import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { NotificationContext } from "../context/NotificationContext";

function Header (){
    const {language, toggleLanguage} = useContext(LanguageContext)
    const {notificationCount} = useContext(NotificationContext)

    return(
        <header style={{ padding: "16px", borderBottom: "1px solid #ccc" }}>
            <h2>Language : {language === 'id' ? "indonesia" : "English"}</h2>
            <p>Notif : {notificationCount}</p>
            <button onClick={toggleLanguage}>{language === 'id' ? "Ganti Bahasa" : "Switc Language"}</button>
        </header>
    )
}

export default Header;
