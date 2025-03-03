import styled from "styled-components";
import Background from '../../assets/Group 204.png'

import Texture from '../../assets/Group 173 (2).png'

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: #f0f0f0;
background: url('${Background}');

`

export const Banner = styled.div`
background: url('${Texture}');
background-color: #1f1f1f;
height: 180px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
background-size: cover;
background-position: center;

img{
    width:150px;
  
    border-radius: 200px;
  
}
`


export const Title = styled.div`
font-size:32px;
font-weight: 600;
padding-bottom: 12px;
color:#61a120;
text-align: center;
position: relative;

&::after {
    position: absolute;
    left:  calc(50% + -28px);
    bottom: 0;
    content: '';
background-color:#61a120 ;
width: 56px;
height: 4px;
}
`


export const Content = styled.div`
display: grid;
grid-template-columns: 1fr 23%;
gap: 20px;
width: 100%;
padding: 40px;
margin: 0 auto;
max-width: 1280px;
`