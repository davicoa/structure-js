import axios from 'axios'

const API_URL = process.env.REACT_APP_END_POINT ? process.env.REACT_APP_END_POINT : 'http://localhost';
const API_PORT = process.env.REACT_APP_PORT ? process.env.REACT_APP_PORT : '8000';

const baseURL = process.env.REACT_APP_END_POINT
    ? process.env.REACT_APP_END_POINT
    : `${API_URL}:${API_PORT}`;

const _axios = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

_axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
})

export default _axios
