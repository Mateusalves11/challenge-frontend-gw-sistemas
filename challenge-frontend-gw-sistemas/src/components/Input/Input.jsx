import * as S from './Input.style';

export function Input({ type, placeholder, value, onChange }) {
    return (
        <S.Input onChange={onChange} value={value} type={type} placeholder={placeholder} />
    );
}
