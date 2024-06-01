import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Header = styled.header`
display: flex;
justify-content: end;
align-items: center;
gap: 10px;
height: 55px;
background-color: #1e1b35;
`
export const Title = styled.h1`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-weight: 800;
font-size: 32px;
font-style: italic;
letter-spacing: 0.05;
text-align: center;
`
export const CustomNavLink = styled(NavLink)`
padding: 7px 15px;
text-decoration: none;
width: 70px;
border-radius: 7px;
outline: none;
border: 1px solid #1e1b35;
color: #fff;
text-align: center;
&.active {
    color: #ae57bf;
  }
`