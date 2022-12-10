//rafce --> export default
//rafc --> export nombrado
import "./CartWidget.css"
import {BsCart4} from "react-icons/bs"
import {Link} from "react-router-dom"

const CartWidget = () => {
    return (
        
            <div className="container-cart">
                    <Link to="/cart"> 
                        <div className="notificacion"></div>
                            <BsCart4 
                            style={{
                                fontSize: "5rem",
                                color: "white",
                                padding: "5px",
                            }}/>
                    </Link>
            </div>
        
    )
}

export default CartWidget
