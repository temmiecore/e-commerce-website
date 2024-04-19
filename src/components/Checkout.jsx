import { useEffect, useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

import "./styles/Checkout.css"

function Checkout({
    cartItems,
    handleCheckout,
}) {
    const [prices, setPrices] = useState([0,0,0,0]);

    const calculatePrice = () => {
        let subtotal = 0;
        cartItems.forEach(item => {
            subtotal += item.price * item.qty
        });
        const fees = subtotal * 0.02;
        const tax = subtotal * 0.05;
        const total = subtotal + fees + tax;
        setPrices([subtotal, fees, tax, total])
    }

    useEffect(() => {
        calculatePrice();
    }, [cartItems]);

    return <div className="cart-checkoutarea">
        <h3 className="heading-text">Checkout</h3>
        <div className="checkoutarea-textarea">
            <h4 className="body-text">Subtotal: ${Math.round(prices[0]*100)/100}</h4>
            <h4 className="body-text">Fees: ${Math.round(prices[1]*100)/100}</h4>
            <h4 className="body-text">Tax: ${Math.round(prices[2]*100)/100}</h4>
            <h4 className="body-text">Total: ${Math.round(prices[3]*100)/100}</h4>
        </div>
        <Button onClick={handleCheckout}>Checkout now</Button>
    </div>
}

Checkout.propTypes = {
    cartItems: PropTypes.array.isRequired,
    handleCheckout: PropTypes.func.isRequired,
}

export default Checkout;