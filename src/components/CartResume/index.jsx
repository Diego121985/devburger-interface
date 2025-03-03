import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Button, Container } from "./styles";

import { api } from '../../services/api'
import { formatPrice } from '../../utils/formatPrice'
import { useCart } from '../../hooks/CartContext';
import { useNavigate } from "react-router-dom"; 



export function CartResume() {

    const navigate = useNavigate()

    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(500);

    const { cartProducts, clearCart } = useCart();


    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc;
        }, 0);

        setFinalPrice(sumAllItems)
    },[cartProducts])


    const submitOrder = async () => {
        const products = cartProducts.map((product) => {
            return {id: product.id, quantity: product.quantity, price:product.price};
        });

        try{
          const {data} = await api.post('/create-payment-intent',{products})

          navigate('/checkout', {
            state: data,
          });
clearCart();
        } catch(err) {
          toast.error('Erro , tente novamente', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

        }



    }


    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="tille">Resumo do pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatPrice(finalPrice)}</p>
                    <p className="delivery-tax">{formatPrice(finalPrice)}</p>
                    <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
                </div>
                <div className="container-buttom">
                    <p>Total</p>
                    <p>{formatPrice(finalPrice + deliveryTax)}</p>

                </div>

            </Container>
            <Button onClick={submitOrder}>Finalizar Pedido</Button>
        </div>
    )
}