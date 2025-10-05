import axios from 'axios';

// Add a request interceptor
const requestInterceptor = axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('userDataToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default requestInterceptor;
