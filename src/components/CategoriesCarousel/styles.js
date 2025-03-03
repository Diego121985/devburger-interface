import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
.carousel-item {
    padding-right: 0px;
}
.react-multiple-carousel__arrow--left {
 position: absolute;
 left: 10px;
    margin-bottom: 149px;
   
}
.react-multiple-carousel__arrow--right {
    margin-bottom: 149px;
    position: absolute;
    right: 50px;
}

padding-left: 30px;
`
export const Title = styled.h2`
font-size: 32px;
font-weight: 600;
color: #9758a5;
padding-bottom: 12px;
position: relative;
text-align: center;
margin:20px 0;

&::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color:#9758a5;
    left: calc(50% - 28px);

}

`
export const ContainerItems = styled.div`
background: url('${(props) => props.imageUrl}');
background-position: center;
background-size: cover;
display: flex;
align-items: center;
padding: 20px 10px;
width: 90%;
height: 200px;
border-radius: 20px;



`
export const CategoryButton = styled(Link)`
    font-size: 20px;
    font-weight: 500;
    background-color: rgb(0,0,0,0.5);
    padding: 0px 20px;
    border-radius: 15px;
    margin-top: 100px;
    color: white;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background-color:#9758a5 ;
    }

`