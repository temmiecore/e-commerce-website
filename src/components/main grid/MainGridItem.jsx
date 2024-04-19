import Button from "../Button"
import PropTypes from "prop-types"

function MainGridItem({
    name,
    price,
    image,
    handleAddItemToCart
}) {
    return <div className="main-grid-item">
        <div className="main-grid-item-imagearea">
            <img src={image} alt={name}/>
        </div>
        <div className="main-grid-item-textarea">
            <h3 className="body-text">{name}</h3>
            <h4 className="body-text">${price}</h4>
            <Button onClick={handleAddItemToCart}>+ Add to cart</Button>
        </div>
    </div>
}

MainGridItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    handleAddItemToCart: PropTypes.func.isRequired,
}

export default MainGridItem;