import { useContext } from 'react';
import { ToastContext } from '../../context/toast/ToastContext.jsx';

const useToast = () =>  {
    return useContext(ToastContext);
}

export default useToast;
