import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import home from "../assets/home.png";
import cart from "../assets/market.png";
import user from "../assets/user.png";

function Nav() {
    const [isPhone, setPhone] = useState(window.innerWidth < 428);

    const updateMedia = () => {
        setPhone(window.innerWidth < 428);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });

    return <nav>
        <Link to="main">
            { isPhone ? <img src={home} alt="Home" />
                : <h4 className="body-text">Home</h4>
            }
        </Link>
        <Link to="account">
            { isPhone ? <img src={user} alt="Account" />
                : <h4 className="body-text">Account</h4>
            }
        </Link>
        <Link to="cart">
            { isPhone ? <img className="cart" src={cart} alt="Cart" />
                : <h4 className="body-text">Cart</h4>
            }
        </Link>
    </nav>
}

export default Nav;