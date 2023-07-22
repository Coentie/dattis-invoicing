import Axios from 'axios';

export default () => {
    /**
     * Creates an instance of axios that communicates with our back-end.
     *
     * @param auth
     * @returns {AxiosInstance}
     */
    const createAuthorizedAxiosInstance = (auth) => {
        const axios = Axios.create({
            baseURL: 'http://localhost:5112/api/',
            headers: {
                Authorization: `Bearer ${auth.token}`,
            },
        });

        axios.interceptors.response.use(res => res, async error => {
            if(error.response.status === 401) {
                window.location.href = '/';
            }
        });

        return axios;
    }

    /**
     * Creates an instance of public that communicates without back-end but without credentials.
     * @returns {AxiosInstance}
     */
    const createPublicAxiosInstance = () => {
        return Axios.create({
            baseURL: 'http://localhost:5112/api/'
        })
    }

    return {
        createPublicAxiosInstance,
        createAuthorizedAxiosInstance,
    }
}
