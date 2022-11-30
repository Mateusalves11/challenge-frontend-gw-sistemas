import * as S from './ProfileCard.style';

export function ProfileCard({ name, email, image, LastName }) {

    return (
        <S.ProfileCard>
            <S.ProfileCardImage src={image} />
            <S.Box padding='10px 0px' gap='8px'>
                <S.Name>{name} {LastName}</S.Name>
                <S.line />
                <S.Box margin='10px 0px'>
                    <S.Title>Email</S.Title>
                    <S.Email>{email}</S.Email>
                </S.Box>
            </S.Box>
        </S.ProfileCard>
    );
}
