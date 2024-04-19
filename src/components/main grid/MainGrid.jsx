import { getItem } from "../../assets/item generator/itemGenerator";
import { v4 as uuidv4 } from "uuid"
import { useEffect } from "react";
import PropTypes from "prop-types"
import { useState } from "react";
import MainGridItem from "./MainGridItem";

import "../styles/MainGrid.css"

function MainGrid({
    handleAddItemToCart
}) {
    const [gridItems, setGridItems] = useState([]);

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

    useEffect(() => {
        getItems();
    }, []);

    return <div className="main-grid-parent">
        <div className="main-grid">
            {gridItems.map(item => (
                <MainGridItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    handleAddItemToCart={() => handleAddItemToCart(item)} />
            ))}
        </div>
    </div>
}

MainGrid.propTypes = {
    handleAddItemToCart: PropTypes.func.isRequired,
}

export default MainGrid;