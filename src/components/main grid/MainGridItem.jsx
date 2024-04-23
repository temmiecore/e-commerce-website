import Button from "../Button";
import PropTypes from "prop-types";

function MainGridItem({
    item,
    handleAddItemToCart
}) {
    return <div className="main-grid-item">
        <div className="main-grid-item-imagearea">
            <img src={item.image} alt={item.name}/>
        </div>
        <div className="main-grid-item-textarea">
            <h3 className="body-text">{item.name}</h3>
            <h4 className="body-text">${item.price}</h4>
            <Button onClick={() => handleAddItemToCart(item)}>+ Add to cart</Button>
        </div>
    </div>
}

MainGridItem.propTypes = {
    item: PropTypes.object.isRequired,
    handleAddItemToCart: PropTypes.func.isRequired,
}

export default MainGridItem;