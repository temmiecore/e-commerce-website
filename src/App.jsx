import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from "./components/Header"
import PageLanding from "./components/pages/PageLanding"
import PageMain from "./components/pages/PageMain"
import PageCart from "./components/pages/PageCart"

function App() {

  return <>
    <Router >
        <Header/>
          <Routes>
            <Route path="/" element={<PageLanding/>}/>
            <Route path="/main" element={<PageMain/>}/>
            <Route path="/cart" element={<PageCart/>}/>
          </Routes>
    </Router>
  </>
}

export default App
