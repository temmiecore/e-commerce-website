import PropTypes from "prop-types";
import CartGrid from "../cart grid/CartGrid";

import "../styles/PageCart.css";
import Checkout from "../Checkout";

function PageCart({
    cartItems,
    handleQuantityChange,
    handleCheckout,
}) {
    return <div className="cart-page-parent">
        <div className="cart-page">
            <div className="cart-cartarea">
                <h3 className="heading-text">Shopping Cart</h3>
                <CartGrid cartItems={cartItems} handleQuantityChange={handleQuantityChange} />
            </div>
            <Checkout cartItems={cartItems} handleCheckout={handleCheckout}/>
        </div>
    </div>
}

PageCart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    handleQuantityChange: PropTypes.func.isRequired,
    handleCheckout: PropTypes.func.isRequired,
}

export default PageCart;