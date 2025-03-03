import { useLocation } from "react-router-dom"
import stripePromise from '../../config/stripeConfig'
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/Stripe/CheckoutForm";

export function Checkout() {
    const {
        state: { clientSecret },
    } = useLocation();

    if (!clientSecret) {
        return <div>Erro , volte e teste novamente</div>
    }

    console.log(clientSecret)

    return (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
        </Elements>
    )
}