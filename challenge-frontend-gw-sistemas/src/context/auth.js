import { createContext, useEffect, useState } from "react";
import api from "services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [hasUser, setHasUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem('user_token');
        if (userToken) {
            setHasUser(true)
        };
    }, []);

    const signin = (email, password) => {
        return api.post('/login', {
            'email': email,
            'password': password
        })
            .then((res) => {
                if (res.data.token) {
                    setTokenLocalStorage(res.data.token);
                }
            })
    }

    const setTokenLocalStorage = (token) => {
        if (token) {
            localStorage.setItem('user_token', JSON.stringify(token));
            setHasUser(true);
            window.location.reload();
        }
    };

    const signup = (email, password) => {
        return api.post('/register', {
            'email': email,
            'password': password
        })
            .then((res) => {
                if (res.data.token) {
                    setTokenLocalStorage(res.data.token);
                }
            })
    }

    const signout = () => {
        setHasUser(null);
        localStorage.removeItem('user_token');
        window.location.reload();
    }

    return <AuthContext.Provider value={{ hasUser, signed: !!hasUser, signin, signout, signup }}>
        {children}
    </AuthContext.Provider>
};
