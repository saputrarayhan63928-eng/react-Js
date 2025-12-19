import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import { LanguageContext } from "../context/LanguageContext";

function Dashboard (){
    const {addNotification} = useContext(NotificationContext)
    const {language} = useContext(LanguageContext)

    return(
        <button onClick={() => addNotification("Pesan baru masuk!" )}>
            {language === 'id' ? 'Tambah Notif' : 'Add A Notification'}
        </button>
    )
}

export default Dashboard