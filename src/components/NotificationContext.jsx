import { createContext, useContext, useEffect, useState } from "react";

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({
    message: "",
    type: "success",
  });

  useEffect(() => {
    if (!notification.message) return undefined;
    const timer = setTimeout(() => {
      setNotification({ message: "", type: "success" });
    }, 3000);
    return () => clearTimeout(timer);
  }, [notification]);

  const setMessage = (message, type = "success") => {
    setNotification({ message, type });
  };

  return (
    <NotificationContext.Provider value={{ notification, setMessage }}>
      {children}
      {notification.message && (
        <div
          className={`snackbar snackbar--${notification.type}`}
          role="status"
          aria-live="polite"
        >
          <i
            className={`fa-solid ${
              notification.type === "error"
                ? "fa-circle-exclamation"
                : "fa-circle-check"
            }`}
            aria-hidden="true"
          />
          <span>{notification.message}</span>
        </div>
      )}
    </NotificationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};
