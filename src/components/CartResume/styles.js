import styled from "styled-components";

export const Container = styled.div`
background-color: #ffff;

border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-bottom: 20px;

*{
    color: #484848;
    font-weight: 500;
}

.container-top {
    display: grid;
    grid-gap: 15px 20%;
    grid-template-areas:'title title'
    'items items-price'
    'delivery-tax delivery-tax-price';

    .tille {
        width: 100%;
        grid-area: title;
        font-size:23px;
        font-weight: 700;
        margin-bottom: 20px;
        background-color: #484848;
        color: white;
        padding: 12px;
        text-align: center;
      border-top-left-radius: 20px;
      border-top-right-radius:20px;
 
    }

    .items{
        grid-area:items;
        padding-left:10px;
    }


    .items-price{
        grid-area:items-price;
        padding-right:10px;
    }

    .delivery-tax{
        grid-area:delivery-tax;
        padding-left:10px;
      
    }

    .delivery-tax-price{
        grid-area: delivery-tax-price;
        padding-right:10px;
    }
    
}
.container-buttom{
        display: flex;
       justify-content: space-between;
        font-size: 20px;
        font-weight:700;
        margin-top:24px;
        padding: 20px;

        *{
   
    font-weight: 700;
}
    }
`

export const Button =styled.button`
 width: 100%; 
 height: 32px;
 border: 0;
 border-radius: 5px;
background-color:#9758a6;
font-family: "Road Rage", sans-serif ;
font-size: 25px;
color: white;



&:hover{
    background-color: #6f357c;
    border: 1px dashed white;
}
`