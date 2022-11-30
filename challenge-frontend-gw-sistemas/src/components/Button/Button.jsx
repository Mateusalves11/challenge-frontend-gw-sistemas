import * as S from './Button.style';

export function Button({ children, onClick }) {
    return (
        <S.Button onClick={onClick}>
            {children ? children : 'Button'}
        </S.Button>
    );
}
