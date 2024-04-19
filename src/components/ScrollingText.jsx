import PropTypes from "prop-types"
import "./styles/ScrollingText.css"

function ScrollingText({ children, speed }) {
    return <div className={"scrolling-container " + speed}>
        <h1 className="heading-text big scrolling-text">
            {children}
        </h1>
        <h1 className="heading-text big scrolling-text" aria-hidden="true">
            {children}
        </h1>
        <h1 className="heading-text big scrolling-text" aria-hidden="true">
            {children}
        </h1>
        <h1 className="heading-text big scrolling-text" aria-hidden="true">
            {children}
        </h1>
    </div>
}

ScrollingText.propTypes = {
    children: PropTypes.string.isRequired,
    speed: PropTypes.string,
};

export default ScrollingText;

