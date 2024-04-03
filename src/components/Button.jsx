import PropTypes from 'prop-types'
import "./styles/Button.css"

function Button({ children }) {
    return <button className="body-text">{children}</button>
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Button;