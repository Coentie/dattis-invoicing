import { createContext, useState } from 'react';

export const ToastContext = createContext({});

export const ToastProvider = ({children}) => {
    const [toasts, setToasts] = useState([]);
    const [toastId, setToastId] = useState(0);

    /**
     * Generates a toast id.
     * @returns {{}}
     */
    const generateToastId = () => {
        setToastId(toastId + 1);
        return toastId;
    };

    /**
     * Enqueues a toast.
     * @param type
     * @param message
     * @param timeout
     */
    const enqueue = (type, message = '', timeout = 3000) => {
        const id = generateToastId();
        setToasts([...toasts, { id, type, message, timeout }]);

        setTimeout(() => dequeue(id), timeout);
    };

    /**
     * Dequeues a toast.
     * @param id
     */
    const dequeue = (id) => {
        setToasts(toasts.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toasts, dequeue, notify: enqueue }}>
            {children}
        </ToastContext.Provider>
    )
}
