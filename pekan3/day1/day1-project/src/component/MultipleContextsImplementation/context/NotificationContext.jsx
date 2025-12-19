import { createContext,useState } from "react";

export const NotificationContext = createContext();

function NotificationProfider ({children}){
    const [notification,setNotification] = useState([])

    const addNotification = (messege) =>{
        setNotification(prev => [...prev,messege])
    }

    const clearNotification = () => {
        setNotification([])
    }

    return(
        <NotificationContext.Provider
            value={{
                notification,
                notificationCount: notification.length,
                addNotification,
                clearNotification,
            }}
        >
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationProfider;