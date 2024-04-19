import PropTypes from "prop-types";
import CartGridItem from "./CartGridItem";

import "../styles/CartGrid.css"

function CartGrid({
    cartItems,
}) {
    return <div className="cart-grid">
        {cartItems.map(item => (
            <CartGridItem
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                qty={item.qty}
            />
        ))}
    </div>
}

CartGrid.propTypes = {
    cartItems: PropTypes.array.isRequired,
}


export default CartGrid;