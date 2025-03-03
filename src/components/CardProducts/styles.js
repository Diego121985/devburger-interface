import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
background-color: white;
padding: 20px;
gap: 20px;
border-radius: 18px;
cursor: pointer;
margin-right: 30px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
position: relative;
div{
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
  justify-content: space-between;
}
p{
    font-size: 15px;
    color: #ff8c05;
    font-weight:600;
    margin-top:35px;
    line-height:18px;


}
strong {
    font-size: 22px;
    color:#363636;
    font-weight:700;
    line-height:30px;


}

`
export const CardImage = styled.img`
height: 100px;
position: absolute;
top: -50px;



.react-multi-carousel-list {
    display: flex
;
    align-items: center;
  
    position: relative;
}
`
