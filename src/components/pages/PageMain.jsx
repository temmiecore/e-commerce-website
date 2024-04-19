import ScrollingText from "../ScrollingText";
import PropTypes from "prop-types"
import MainGrid from "../main grid/MainGrid";

import "../styles/PageMain.css"

function PageMain({
    handleAddItemToCart,
}) {
    return <div className="main-page">
        <div className="main-opening-imagearea">
            <ScrollingText>
                15% off everything monochrome.
            </ScrollingText>
            <ScrollingText speed="slow">
                buy 3 shirts, get one shoe for free.
            </ScrollingText>
        </div>
        <MainGrid handleAddItemToCart={handleAddItemToCart}/>
    </div>
}

PageMain.propTypes = {
    handleAddItemToCart: PropTypes.func.isRequired,
}

export default PageMain;