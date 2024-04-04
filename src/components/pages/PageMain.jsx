import ScrollingText from "../ScrollingText";
import MainGrid from "../main grid/MainGrid";

import "../styles/PageMain.css"

function PageMain() {
    return <div className="main-page">
        <div className="main-opening-imagearea">
            <ScrollingText>
                15% off everything monochrome.
            </ScrollingText>
            <ScrollingText speed="slow">
                buy 3 shirts, get one shoe for free.
            </ScrollingText>
        </div>
        <MainGrid />
    </div>
}

export default PageMain;