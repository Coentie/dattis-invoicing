import { axios, axiosPrivate } from '../util/axios/index.js';
import useAuth from './useAuth.jsx';

const useRefresh = () => {
    const {setAuth} = useAuth();

    return async() => {
        const refreshReq = await axiosPrivate.get('/auth/refresh', {
            ignoreInterceptor: true
        });

        const userReq = await axiosPrivate.get('/user', {
            ignoreInterceptor: true
        });

        if(userReq.response.status !== 200 || refreshReq.response.status !== 200) {
            return false
        }

        setAuth(userReq.data.data);
        return true;
    }
}

export default useRefresh;
