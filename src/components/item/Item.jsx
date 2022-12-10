import "./Item.css"
import { Link } from "react-router-dom";

const Item = ({elemento}) => { /* siempre se me olvida poner esto entre corchetes */
    return (
        <div className="card">
            <h2>{elemento.name}</h2>
            <h3>${elemento.price}</h3>
            <img src={elemento.img} alt="producto"/>
            <Link to={`/itemDetail/${elemento.id}`}>Ver detalles</Link>
        </div>
    );
};

export default Item;