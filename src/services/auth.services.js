import axios from './axios.config';

class AuthService {
    login(data) {
        return axios.post('/api/login/', data);
    }

    register(data) {
        return axios.post('/api/usuarios/registro/', data);
    }

    changePasswordRequest(data) {
        return axios.post('/api/usuarios/recuperar-contraseña/', data);
    }

    changePassword(hash, data) {
        return axios.post(`/api/usuarios/change-password/${hash}`, data);
    }
}

export default new AuthService();
