import { Button } from 'components/Button/';
import { Input } from 'components/Input/';
import * as S from './FormLogin.style';
import useAuth from "hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from '@mui/material';

export function FormLogin() {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }

    const navigate = useNavigate();

    const { signin } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Preencha todos os campos');
            setOpen(true);
            return;
        }
        try {
            await signin(email, password);
            navigate('/users');
        } catch (err) {
            setError('Usuário ou senha inválidos');
            setOpen(true);
        }
    }

    return (
        <S.FormLogin>
            <Input value={email} type="email" placeholder="Email" onChange={(e) => [setEmail(e.target.value), setError("")]} />

            <Input value={password} type="password" placeholder="Password" onChange={(e) => [setPassword(e.target.value), setError('')]} />

            <Button onClick={handleLogin}>Login</Button>
            {error && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>}
        </S.FormLogin>
    );
}
