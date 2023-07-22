import { createContext, useState } from 'react';

export const CustomerContext = createContext({});

export const CustomerProvider = ({children}) => {
    const [customers, setCustomers] = useState([]);

    return (
        <CustomerContext.Provider value={{customers, setCustomers}}>
            {children}
        </CustomerContext.Provider>
    )
}
