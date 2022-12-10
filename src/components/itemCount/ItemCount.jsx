import "./ItemCount.css"
import { useState } from "react"

const ItemCount = ({initial, stock}) => {

    const [contador, setContador] = useState(initial)

    const sum = () =>{
        // eslint-disable-next-line no-unused-expressions
        contador < stock ? setContador (contador - 1) : null;
    }

    const res = () => {
        // eslint-disable-next-line no-unused-expressions
        contador > initial ? setContador(contador - 1) : null;
    }

    const onAdd = ( cantidad ) => {
        console.log("la cantidad es: ", cantidad)
    }

    return (
            <div className="contador">
                <button onClick={sum} style={{
                            fontSize: "2rem",
                            width: "4rem",
                            margin: "2px",
                            color: "black",
                            padding: "5px",
                }}>+</button>
                <h1 className="numeroContador">{contador}</h1>
                <button onClick={res} style={{
                            fontSize: "2rem",
                            width: "4rem",
                            margin: "2px",
                            color: "black",
                            padding: "5px",
                }}>-</button>
                <button onClick={()=> onAdd(contador)}>Agregar al carrito</button>
            </div>
    )
}

export default ItemCount;

