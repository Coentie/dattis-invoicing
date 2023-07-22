import { createContext, useState } from 'react';
import useAuth from '../providers/useAuth.jsx';
import useAxios from '../util/axios/useAxios.js';

export const AxiosContext = createContext({});

export const AxiosProvider = ({children}) => {
    const {auth} = useAuth();
    const {createAuthorizedAxiosInstance, createPublicAxiosInstance} = useAxios()

    const axios = createPublicAxiosInstance();
    const axiosPrivate = createAuthorizedAxiosInstance(auth);

    return (
        <AxiosContext.Provider value={{ axios, axiosPrivate }}>
            {children}
        </AxiosContext.Provider>
    )
}
