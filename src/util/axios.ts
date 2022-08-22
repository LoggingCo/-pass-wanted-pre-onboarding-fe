import axios from 'axios';

type tokenType = string | null;

export const axiosApiInstance = axios.create({
    baseURL: process.env.REACT_APP_HOST,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosApiInstance.interceptors.request.use(
    async config => {
        const access_token: tokenType = localStorage.getItem(
            process.env.REACT_APP_TOEKN_KEY as string,
        );

        if (!access_token) {
            return config;
        } else {
            config.headers = {
                Authorization: `Bearer ${access_token}`,
            };
            return config;
        }
    },
    error => {
        Promise.reject(error);
    },
);
