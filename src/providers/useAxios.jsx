import { useContext } from 'react';
import { AxiosContext } from '../context/AxiosContext.jsx';

const useAxios = () => {
    return useContext(AxiosContext);
}

export default useAxios;
