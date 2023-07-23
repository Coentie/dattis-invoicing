import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, } from 'react-router-dom';
import './index.css';
import router from './util/router/index.js';
import { AuthProvider } from './context/AuthProvider.jsx';
import { AxiosProvider } from './context/AxiosContext.jsx';
import ToastList from './components/ui/toast/ToastList.jsx';
import { ToastProvider } from './context/toast/ToastContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ToastProvider>
            <AuthProvider>
                <AxiosProvider>
                    <RouterProvider router={router}/>
                    <ToastList/>
                </AxiosProvider>
            </AuthProvider>
        </ToastProvider>
    </React.StrictMode>,
);
