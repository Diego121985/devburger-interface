import styled from "styled-components";
import BannerHamburger from '..//..//assets/pexels-valeria-boltneva-1639562 1.svg'
import Background from '../../assets/Group 204.png'
import { Link } from "react-router-dom";


export const Container = styled.div`
width: 100%;
min-height:100vh ;
background-color: #f0f0f0;
background:linear-gradient(rgba(236, 235, 235, 0.5),
rgba(255,255,255, 0.3)), url('${Background}');
`


export const Banner = styled.div`
display: flex;
height: 480px;
width: 100%;
justify-content: center;
position: relative;
align-items: center;


background: url('${BannerHamburger}')no-repeat;

background-position:center;
background-color: #1f1f1f;
background-size: cover;

h1{
     font-family: "Road Rage", sans-serif ;
     font-size: 80px;
  line-height:65px;
  color: white;
  position: absolute;
  right: 20%;
  top: 30%;
 
  
}
span{
    display: block;
    color: white;
  font-size:20px ;
   

}

`

export const CategoryMenu = styled.div`
 display: flex;
 justify-content: center;
 gap: 50px;
 margin-top: 20px;
 cursor: pointer;


 


`

export const CategoryButton = styled(Link)`
 text-decoration: none;
 font-size: 18px;
 border-bottom: 2px solid;
 font-weight:600;
 color: ${props => (props.$isActiveCategory ? '#9758a6' : '#696969')} ;
border: none;
border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758a6'};

`




export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
padding: 40px ;
max-width: 1280px;
justify-content: center;
margin: 50px auto 40px;
gap: 60px;


`
