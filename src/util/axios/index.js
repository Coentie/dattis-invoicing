import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useRefresh from '../../hooks/useRefresh.jsx';

export const axiosPrivate = Axios.create({
    baseURL: 'http://localhost:5112/api/',
    withCredentials: true
});

export const axios = Axios.create({
    baseURL: 'http://localhost:5112/api/'
})

axiosPrivate.interceptors.response.use(res => res, async error => {
    if(error.response.status === 401) {
        const { refresh } = useRefresh();

        const tryAgain = refresh();

        if(tryAgain) return Axios.request(error.config);

        const { navigator } = useNavigate();
        await navigator('/');
    }
});
