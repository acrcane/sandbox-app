import styled from "styled-components";
import backgroundImage from '../../assets/404Bg/404img.jpg'

export const Container = styled.div`
width: 100%;
height: 100vh;
background-image: url(${backgroundImage});
background-repeat: no-repeat;
background-position: 100%;
background-size: cover;
`

export const StatusNum = styled.p`
text-align: center;
font-size: 10em;
color: #fff;
letter-spacing: 2;
margin: 0;
`

export const StatusText = styled.p`
text-align: center;
font-size: 5em;
color: #fff;
letter-spacing: 2;
margin: 0;
`