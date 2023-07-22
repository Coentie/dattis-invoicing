import React from 'react'
import ReactDOM from 'react-dom/client'
import {  RouterProvider, } from 'react-router-dom';
import './index.css'
import router from './util/router/index.js';
import { AuthProvider } from './context/AuthProvider.jsx';
import { AxiosProvider } from './context/AxiosContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <AxiosProvider>
            <RouterProvider router={router} />
          </AxiosProvider>
      </AuthProvider>
  </React.StrictMode>,
)
