import styled from "styled-components";


export const ProductImage = styled.img`
height: 60px;
width:60px ;
vertical-align: middle;




`
export const ButtonGroup = styled.div`
display: flex;
align-items: center;
gap: 12px;

button{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: #fff;
    border-radius: 4px;;
    background-color: ${(props) => props.theme.purple};
transition: all 0.4;
border: none;
    &:hover {
        background-color: #6f357c;
    }

}
`
export const EmptyCar = styled.p`
font-size: 20px;
text-align: center;
font-weight: bold;
`
export const TotalPrice = styled.div`
font-size:15px;
font-weight: bold;
`
export const TrashIcons =styled.div`
color: red;
font-size:25px;
margin-top: 40px;
cursor: pointer;
padding-right: 30px;



`