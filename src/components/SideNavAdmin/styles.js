import { Link } from "react-router-dom";
import styled from "styled-components";
 

export const Container = styled.nav`
display: flex;
width: 100%;
height: 100vh;
flex-direction: column;
background: ${(props) => props.theme.black};
align-items: center;
 img{
    width: 60%;
    margin:40px 0 ;
    border-radius:100%
 }

`

export const NavLinkContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;

`


export const NavLink = styled(Link)`
display: flex;
align-items: center;
gap: 12px;
padding:  12px 20px;
text-decoration: none;
color: ${(props) => props.theme.white};
background-color: ${(props) => props.$isActive ? props.theme.purple:' transparent' };
width: 90%;
height: 40px;
margin-left: 10px;
border-radius: 10px;
`

export const Footer = styled.footer`
width: 100%;
margin-top:  auto;

`


