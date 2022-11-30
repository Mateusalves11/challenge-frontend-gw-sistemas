import { Alert, Snackbar } from '@mui/material';
import { Button } from 'components/Button/';
import { Input } from 'components/Input/';
import useAuth from 'hooks/useAuth';
import { useState } from 'react';
import * as S from './FormRegister.style';

export function FormRegister() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const [email, setEmail] = useState('eve.holt@reqres.in');
    // eslint-disable-next-line no-lone-blocks
    {/* O Register do Reqres está aceitando apenas o email deles como cadastro, por isso irei deixar padrão de registro o email deles, mas a senha pode ser qualquer uma! */ }

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');

    const { signup } = useAuth();

    const handleRegister = async () => {
        if (!email || !password || !passwordConfirm) {
            setError('Preencha todos os campos');
            return;
        }
        if (password !== passwordConfirm) {
            setError('Senhas não conferem');
            setOpen(true);
            return;
        }
        try {
            await signup(email, password);
        } catch (err) {
            setError('Erro ao registrar');
            setOpen(true);
        }
    }

    return (
        <S.FormRegister>
            <Input value={email} onChange={(e) => [setEmail(e.target.value), setError('')]} type="email" placeholder="Email" />

            <Input value={password} onChange={(e) => [setPassword(e.target.value), setError('')]} type="password" placeholder="Password" />

            <Input value={passwordConfirm} onChange={(e) => [setPasswordConfirm(e.target.value), setError('')]} type="password" placeholder="Confirm Password" />
            <Button onClick={handleRegister}>Register</Button>

            {error && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>}
        </S.FormRegister>
    );
}
