import React, {createContext, useContext, useState, useEffect} from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {

    const [notification, setNotification] = useState({message: '', type: 'success'});

    useEffect(() => {
        if(Notification.message){
            const timer = setTimeout(() => {
                setNotification({message: '', type: 'success'});
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [notification]);
    
    const setMessage = (message, type = 'success') => {
        setNotification({message, type});
    };

    return (
        <NotificationContext.Provider value={{ notification, setMessage }}>
            {children}
            {notification.message && (
                <div className={`snackbar ${notification.type}`}>
                    {notification.message}
                </div>
            )}
        </NotificationContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNotification = () => {
    const context = useContext(NotificationContext);
    if(!context){
        throw new Error("useNotification must be used within a NotificationProvider");
    }
    return context;
};
