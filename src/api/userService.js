import api from './axios';

export const validateCredentials = async (data) => {
    const response = await api.post(`${import.meta.env.VITE_LOGIN_URL}`, data);
    return response.data;
}