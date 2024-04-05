import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from "./components/Header"
import PageLanding from "./components/pages/PageLanding"
import PageMain from "./components/pages/PageMain"
import PageCart from "./components/pages/PageCart"
import { useState } from "react"

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddItemToCart = (item) => {
    const index = cartItems.findIndex(toFind => toFind.id == item.id);

    if (index == -1) {
      setCartItems(prevData => [...prevData, {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        qty: 1,
      }]);
    }
    else {
      setCartItems(prevData => [
          ...prevData.slice(0, index),
          {
            ...prevData[index],
            qty: prevData[index].qty + 1
          },
          ...prevData.slice(index + 1)
        ]
      )}
    console.log(cartItems);
  }

  return <>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<PageLanding />} />
          <Route path="/home" element={<PageMain handleAddItemToCart={handleAddItemToCart} />} />
          <Route path="/cart" element={<PageCart cartItems={cartItems} />} />
        </Routes>
      </main>
    </Router>
  </>
}

export default App
