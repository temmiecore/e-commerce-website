import PropTypes from "prop-types";
import CartGridItem from "./CartGridItem";

import "../styles/CartGrid.css"

function CartGrid({
    cartItems,
    handleQuantityChange,
}) {
    return <div className="cart-grid">
        {cartItems.map(item => (
            <CartGridItem
                key={item.id}
                item={item}
                handleQuantityChange={handleQuantityChange}
            />
        ))}
    </div>
}

CartGrid.propTypes = {
    cartItems: PropTypes.array.isRequired,
    handleQuantityChange: PropTypes.func.isRequired,
}


export default CartGrid;