import styled from "styled-components";

export const FormRegister = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    gap: 24px;
`

export const Input = styled.input`
    max-width: 400px;
    padding: 10px;
    border-radius: 30px;
    ::placeholder {
        font-size: 15px;
    }
`

export const Button = styled.button`
    max-width: 400px;
    padding: 10px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.button.background};
    :hover{
        background-color: ${({ theme }) => theme.colors.button.hover};
    }
    transition: ease-in-out .3s;
    color: white;
`
