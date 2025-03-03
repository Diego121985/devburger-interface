import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  background-color: #1f1f1f;
  width: 100%;
  height: 62px;
  padding: 0 56px;
  

`

export const Content = styled.div`
  display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 max-width: 1280px;
 margin: 0 auto;
 

`

export const Navigation = styled.nav`
display: flex;
justify-content: center;
align-items: center;
height: 72px;

div{
 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
hr{
    height:24px ;
    border: 1px solidrgb(137, 79, 151);
   
}

`

export const HeaderLink = styled(Link)`
color: ${(props) => (props.$isActive ? '#9758a6' : '#fff')};
border-bottom:  ${(props) => (props.$isActive ? '2px solid #9758a6' : 'none')};;
text-decoration: none;
font-size: 14px;
padding: 10px;
transition:color 200ms;
padding-bottom: 5px;

&:hover{
    color:#9758a6 ;
}

`

export const Options = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 48px;

`

export const Profile = styled.div`
display: flex;
align-items: center;
gap: 12px;
font-size: 14px;

p{
    color: white;
    line-height: 90%;
    font-weight: 300;

    span{
font-weight: 700;
color:#9758a6  ;
    }
}
`

export const LinkContainer = styled.div`
display: flex;
align-items: center;

`

export const Logout = styled.button`
color:#ff3205 ;
text-decoration: none;
font-weight: 700;
background-color: transparent;
border: none;
`