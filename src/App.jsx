import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PageLanding from "./components/pages/PageLanding";
import PageMain from "./components/pages/PageMain";
import PageCart from "./components/pages/PageCart";
import React from "react";

function App() {
    const [cartItems, setCartItems] = React.useState([]);

    const handleAddItemToCart = (item) => {
        const index = cartItems.findIndex((toFind) => toFind.id == item.id);

        if (index == -1)
            setCartItems((prevData) => [...prevData,
                {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    qty: 1,
                },
            ]);
        else
            setCartItems((prevData) => {
                const updatedItems = [...prevData];
                updatedItems[index].qty++;
                return updatedItems;
            });
    };

    const handleQuantityChange = (item, isIncrement) => {
        const index = cartItems.findIndex((toFind) => toFind.id == item.id);

        setCartItems((prevData) => {
            const updatedData = [...prevData];

            if (index == -1)
                return updatedData;

            if (isIncrement)
                updatedData[index].qty++;
            else {
                updatedData[index].qty--;

                if (updatedData[index].qty <= 0)
                    updatedData.splice(index, 1);
            }
            return updatedData;
        });
    };

    const handleCheckout = () => {
        setCartItems([]);
    }

    return (
        <>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" 
                            element={<PageLanding />} 
                        />
                        <Route
                            path="/home"
                            element={<PageMain handleAddItemToCart={handleAddItemToCart} />}
                        />
                        <Route
                            path="/cart"
                            element={
                                <PageCart
                                    cartItems={cartItems}
                                    handleQuantityChange={handleQuantityChange}
                                    handleCheckout={handleCheckout}
                                />
                            }
                        />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );

}

export default App;