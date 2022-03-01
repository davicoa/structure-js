import { createContext, useState } from 'react'
import jwt from 'jwt-decode'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    let token = '';
    if (localStorage.getItem('token')) {
        token = jwt(localStorage.getItem('token'));
    }
    const defaultValue = {
        user_id: token.user_id || '',
        user_name: token.nombre_usuario || '',
        user_email: token.email || '',
        user_rol: token.rol || '',
        user_nombreRol: token.rol_nombre || '',
        user_matricula: token.matricula || '',
        user_token: token || '',
    };

    const [user, setUser] = useState(defaultValue);
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = () => {
        setIsAuthenticated(true)
    }
    const logout = () => {
        localStorage.removeItem('token')
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, setUser, user }}>
            {children}
        </AuthContext.Provider>
    )
}
