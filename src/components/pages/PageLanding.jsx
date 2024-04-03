import { Link } from "react-router-dom";
import Button from "../Button";
import "../styles/PageLanding.css";

function PageLanding() {
    return <div className="landing-page">
        <div className="landing-textarea">
            <h1 className="heading-text">Discover Endless Adventures. Gear Up with Us Today.</h1>
            <p className="body-text">Welcome to ClothSavvy – your destination for the latest fashion trends. Shop effortlessly, and express  your unique style. Fast shipping and easy returns.</p>
            <Link to="home">
                <Button>
                    Shop Now
                </Button>
            </Link>
        </div>
        <div className="landing-imagearea">
            <div className="landing-image"/>
            <div className="landing-image animated"/>
        </div>
    </div>
}

export default PageLanding;