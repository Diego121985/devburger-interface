import styled from "styled-components"

export const Container = styled.div`
.carousel-item {
  
}

overflow-x: hidden;

.react-multi-carousel-list {
    overflow: visible;
   
}

padding-left: 30px;

.react-multiple-carousel__arrow--right {
    right: calc(4% + 1px);
    margin-bottom: 140px;
    position: absolute;
    right: 40px;
}
.react-multiple-carousel__arrow--left {
 position: absolute;
 left: 10px;
    margin-bottom: 140px;
   
}
`
export const Title = styled.h2`
font-size: 32px;
font-weight: 600;
color: #61a120;
padding-bottom: 12px;
position: relative;
text-align: center;
margin:50px 0;


&::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color:#61a120;
    left: calc(50% - 28px);

}
`