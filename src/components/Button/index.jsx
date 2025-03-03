import Cart from '../../assets/Group 160.png'
import { ContainerButton } from "../Button/styles";

export function Button(props) {
    return (
        <ContainerButton {...props}>
            <img src={Cart} alt='carrinho-de-compras' />
        </ContainerButton>
    );
}
