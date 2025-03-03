import styled from "styled-components";

import Background from '../../assets/Group 204.png'
import BannerHome from '../../assets/banner-home.svg'

export const Banner = styled.div`
background: url('${BannerHome}');
background-size: cover;
background-position:center ;
height: 480px;
margin-top: 1px;

h1{
    font-family:'Road Rage', sans-serif;
    font-size: 80px;
    color: white;
    position: absolute;
    right: 20%;
    top: 10%;
}
`


export const Container = styled.section`
background:linear-gradient(rgba(236, 235, 235, 0.5),
rgba(255,255,255, 0.3)), url('${Background}');

`



export const Content = styled.div`

padding-bottom: 40px;
`



