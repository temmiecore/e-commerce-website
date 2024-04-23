import { Link } from "react-router-dom";
import Button from "../Button";

import "../styles/ErrorPage.css";

function ErrorPage() {
    return (
        <div className="error-page">
            <h1 className="heading-text">404 - Not Found</h1>
            <p className="body-text">The page you are looking for does not exist.</p>
            <Link to="/">
                <Button>Go back to Home</Button>
            </Link>
        </div>
    );
}

export default ErrorPage;
