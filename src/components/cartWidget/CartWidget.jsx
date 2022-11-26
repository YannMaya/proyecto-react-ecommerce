//rafce --> export default
//rafc --> export nombrado
import "./CartWidget.css"
import {BsCart4} from "react-icons/bs"

const CartWidget = () => {
    return (
        <div className="container-cart"> 
                <div className="notificacion"></div>
                    <BsCart4 
                    style={{
                        fontSize: "5rem",
                        color: "white",
                        padding: "5px",
                    }}/>
            </div>
    )
}

export default CartWidget
