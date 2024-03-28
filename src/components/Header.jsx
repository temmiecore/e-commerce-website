import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./styles/Header.css"


function Header() {
    return <header>
        <Link to="">
            <h2 className="heading-text">ClothSavvy</h2>
        </Link>
        <Nav/>
    </header>
}

export default Header;
