import styled from "styled-components";

export const ProfileCard = styled.div`
    display: flex;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    padding: 30px 35px;
    margin-bottom: 30px;
    gap: 24px;
    width: 100%;
    @media (max-width: 460px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const ProfileCardImage = styled.img`
    border-radius: 50%;
    width: 40px;
    height: 40px;
`

export const Box = styled.div`
    width: 100%;
    padding: ${(props) => props.padding};
    @media (max-width: 460px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`


export const Title = styled.h1`
    font-size: 16px;
`

export const Name = styled.h1`
    font-size: 16px;
    color: #000000;
`

export const Email = styled.h2`
    font-size: 13px;
    color: #707070;
`

export const line = styled.div`
    width: 100%;
    height: 1px;
    margin: 10px 0px;
    background-color: #707070;
`
