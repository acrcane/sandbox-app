import styled from "styled-components";

export const Bg = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContent = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 550px;
width: 100%;
min-height: 650px;
border-radius: 15px;
background-color: #fff;
`

export const CloseModalBtn = styled.button`
position: absolute;
top: 10px;
right: 10px;
`
export const Container = styled.div`
width: 60%;
margin: 40px auto;
border: 1px solid #000;
border-radius: 5px;
padding: 5px 10px;
`

export const Text = styled.p`
line-height: 2px;

`

export const TabBtnContainer = styled.div`
display: flex;
justify-content: center;
gap: 10px;
margin-top: 25px;
`

export const TabBtn = styled.button`
width: 100px;
heigth: 44px;
padding: 5px;
border-radius: 5px;
background-color: #0f70df;
border: none;
color: #fff;
`

export const InputAdd = styled.input`
width: 220px;
padding: 5px;
outline: none;
`