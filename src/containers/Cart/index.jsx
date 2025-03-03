import Logo from '../../assets/foto.png'
import { CartIntems,CartResume } from '../../components'
import { Banner, Container, Content, Title } from './styles'


export function Cart() {
    return (
    <Container>
        <Banner>
            <img src={Logo} alt='logo devburger'/>
        </Banner>
        <Title> Checkout - Pedido</Title>
    <Content>
        <CartIntems/>
        <CartResume/>

      
    </Content>
    </Container>
    )
}