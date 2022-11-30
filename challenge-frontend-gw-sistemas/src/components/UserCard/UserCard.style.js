import styled from "styled-components";

export const UserCard = styled.div`
    display: flex;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 30px;
    cursor: pointer;
    flex-wrap: wrap;
    @media (max-width: 460px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
`

export const UserCardImage = styled.img`
    border-radius: 50%;
    width: 40px;
`

export const Box = styled.div`
    padding-left: 30px;
    @media (max-width: 460px) {
        padding-left: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const Title = styled.h1`
    font-size: 16px;
`

export const Name = styled.h2`
    font-size: 13px;
    color: #707070;
`

export const Email = styled.h2`
    font-size: 13px;
    color: #707070;
`
