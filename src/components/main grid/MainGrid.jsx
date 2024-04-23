import { getItem } from "../../assets/item generator/itemGenerator";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import React from "react";
import MainGridItem from "./MainGridItem";
import Button from "../Button";

import "../styles/MainGrid.css";

function MainGrid({
    handleAddItemToCart
}) {
    const [gridItems, setGridItems] = React.useState([]);

    const getItems = async (count = 10) => {
        for (let i = 0; i < count; i++) {
            getItem()
                .then(data => {
                    const item = {
                        id: uuidv4(),
                        name: data[0],
                        price: data[1],
                        image: data[2],
                    };
                    setGridItems(prevData => [...prevData, item])
                });
        }
    }

    React.useEffect(() => {
        getItems();
    }, []);

    return <div className="main-grid-parent">
        <div className="main-grid">
            {gridItems.map(item => (
                <MainGridItem
                    key={item.id}
                    item={item}
                    handleAddItemToCart={handleAddItemToCart} />
            ))}
        </div>
        <Button onClick={() => getItems(10)}>Load more</Button>
    </div>
}

MainGrid.propTypes = {
    handleAddItemToCart: PropTypes.func.isRequired,
}

export default MainGrid;