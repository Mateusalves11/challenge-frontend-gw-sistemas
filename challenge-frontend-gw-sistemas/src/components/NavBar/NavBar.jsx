import useAuth from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import * as S from './NavBar.style';
export function NavBar() {
    const [hasToken, setHasToken] = useState(false);
    const { signout } = useAuth();

    useEffect(() => {
        if (localStorage.getItem('user_token')) {
            setHasToken(true);
            return
        }
        setHasToken(false);
    }, []);

    return (

        <S.NavBar>
            <S.Container>
                <S.Title>GW Junior</S.Title>
                <S.BoxLinks>
                    {hasToken ?
                        <>
                            <S.Image src='https://reqres.in/img/faces/7-image.jpg' alt="user" />
                            <S.Link onClick={signout} fontSize='24px' color='Black'>Logout</S.Link>
                        </>
                        : (
                            <>
                                <S.Link onClick={() => { window.location.href = "/"; }} color='Blue'>Login</S.Link>
                                <S.Line />
                                <S.Link onClick={() => { window.location.href = "/Register"; }} color='Black'>Register</S.Link>
                            </>
                        )}

                </S.BoxLinks>
            </S.Container>
        </S.NavBar>
    );
}