import PropTypes from "prop-types";

function CartGridItem({
    name,
    price,
    image,
    qty,
}) {
    return <div className="cart-grid-item">
        <img src={image} alt={name} />
        <div className="cart-grid-item-textarea">
            <div>
                <h4 className="body-text">{name}</h4>
                <h4 className="body-text">${price}</h4>
            </div>
            <h5 className="body-text">in stock</h5>
            <h4 className="body-text">Qty: {qty}</h4>
        </div>
    </div>
}

CartGridItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
}

export default CartGridItem;