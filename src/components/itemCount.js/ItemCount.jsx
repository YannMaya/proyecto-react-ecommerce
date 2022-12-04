import "./ItemCount.css"
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial)


    const sum = () =>{
            setContador(contador + 1)
    }
    
    const res = () =>{
        setContador(contador - 1)
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
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
    )
}

export default ItemCount
