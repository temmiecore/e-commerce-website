import ScrollingText from "../ScrollingText";
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
        <div className="main-grid">

        </div>
    </div>
}

export default PageMain;