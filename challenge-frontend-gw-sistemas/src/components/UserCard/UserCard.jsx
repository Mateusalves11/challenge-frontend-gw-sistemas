import * as S from './UserCard.style';

export function UserCard({ name, email, image, id }) {

    return (
        <S.UserCard onClick={() => {
            window.location.href = `/users/${id ? id : ''}`
        }}>
            <S.UserCardImage src={image} />
            <S.Box>
                <S.Title>First Name</S.Title>
                <S.Name>{name}</S.Name>
            </S.Box>

            <S.Box>
                <S.Title>Email</S.Title>
                <S.Email>{email}</S.Email>
            </S.Box>
        </S.UserCard>
    );
}
