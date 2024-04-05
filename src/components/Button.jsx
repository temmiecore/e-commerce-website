import PropTypes from 'prop-types'
import "./styles/Button.css"

function Button({
    children,
    onClick
}) {
    return <button
        onClick={onClick}
        className="body-text">
        {children}
    </button>
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;