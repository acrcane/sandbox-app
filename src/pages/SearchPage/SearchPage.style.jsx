import styled from "styled-components";

export const Container = styled.div`

`

export const Form = styled.form`
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 15px;
`

export const Label = styled.label``

export const InputSearch = styled.input`
font-size: 16px;
width: 224px;
height: 34px;
padding: 5px;
border-radius: 10px;
border: 1px solid #000;
outline: none;
` 

export const SearchBtn = styled.button`
font-size: 16px;
width: 232px;
height: 42px;
padding: 5px;
border-radius: 10px;
background-color: #1e1b35;
border: 1px solid #fff;
color: #fff;
transition: background 0.5s ease;
    &:hover{
        background-color: #ae57bf;
    }
`