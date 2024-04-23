import PropTypes from "prop-types";
import Button from "../Button";

function CartGridItem({
    item,
    handleQuantityChange,
}) {
    return <div className="cart-grid-item">
        <img src={item.image} alt={item.name} />
        <div className="cart-grid-item-textarea">
            <div className="cart-grid-item-nameprice">
                <div>
                    <h4 className="body-text">{item.name}</h4>
                    <h5 className="body-text">in stock</h5>
                </div>
                <h4 className="body-text">${item.price}</h4>
            </div>
            <div className="cart-grid-item-qty">
                <h4 className="body-text">Quantity: {item.qty}</h4>
                <Button onClick={() => handleQuantityChange(item, true)} ariaLabel={"Add 1 " + item.name + " to cart"}>+</Button>
                <Button onClick={() => handleQuantityChange(item, false)} ariaLabel={"Remove 1 " + item.name + " to cart"}>-</Button>
            </div>
        </div>
    </div>
}

CartGridItem.propTypes = {
    item: PropTypes.object.isRequired,
    handleQuantityChange: PropTypes.func.isRequired,
}

export default CartGridItem;