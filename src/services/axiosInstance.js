import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VITE_APP_API_BASE_URL,
});

export default axiosInstance;