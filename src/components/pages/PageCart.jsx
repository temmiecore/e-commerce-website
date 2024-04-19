import PropTypes from "prop-types";
import CartGrid from "../cart grid/CartGrid";

import "../styles/PageCart.css"

function PageCart({
    cartItems,
}) {
    return <div className="cart-page-parent">
        <div className="cart-page">
            <div className="cart-cartarea">
                <h3 className="body-text">Shopping Cart</h3>
                <CartGrid cartItems={cartItems} />
            </div>
            <div className="cart-checkoutarea">
            </div>
        </div>
    </div>
}

PageCart.propTypes = {
    cartItems: PropTypes.array.isRequired,
}

export default PageCart;