import axios from 'axios';
import { SERVER_FAST_API } from './api';

const axiosInstance = axios.create({
  baseURL: SERVER_FAST_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour gérer les erreurs globalement (optionnel)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
