import api from './axios';

export const getDevices = async () => {
    const response = await api.get(`${import.meta.env.VITE_ASSETS_GET_URL}`);
    return response.data;
}