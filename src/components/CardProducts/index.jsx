
import { CartButton } from "../CartButton";
import { CardImage, Container } from "./styles"
import PropTypes from "prop-types";
import { useCart } from "../../hooks/CartContext";
export function CardProducts({product}) {

    const {putProductInCart} = useCart()


    return (

        <Container>
            <CardImage src={product.url} alt={product.name} />

            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>
            <CartButton onClick= {() => putProductInCart(product)}></CartButton>
        </Container> 
    )

    
}
CardProducts.propTypes = {
    product: PropTypes.string.isRequired, // `title` é obrigatório e deve ser uma string
    count: PropTypes.object, }