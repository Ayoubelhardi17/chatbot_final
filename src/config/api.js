import axios from 'axios';

const api = axios.create({
    baseURL: 'https://chatbot-api-production-b9ef.up.railway.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor pour ajouter le token d'authentification
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api; 