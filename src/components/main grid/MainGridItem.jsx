import Button from "../Button"

function MainGridItem({
    name,
    price,
    image
}) {
    return <div className="main-grid-item">
        <div className="grid-item-imagearea">
            <img src={image} alt={name}/>
        </div>
        <div className="grid-item-textarea">
            <h3 className="body-text">{name}</h3>
            <h4 className="body-text">${price}</h4>
            <Button>+ Add to cart</Button>
        </div>
    </div>
}

export default MainGridItem;