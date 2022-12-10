import {useState } from "react"
import ItemCount from '../itemCount/ItemCount'
import "./ItemListContainer.css"

const ItemListContainer = ( { greetings } ) => {

    const [modoOscuro, setModoOscuro] = useState(false)

    const cambiarModoOscuro = ()=>{
        setModoOscuro(!modoOscuro)
    }

    return (
        <div className={modoOscuro ? "container-items-dark" : "container-items-light"}>
            <h2>{greetings}</h2>
            <ItemCount initial={1} stock={10}/>
            <button onClick={cambiarModoOscuro}>{modoOscuro ? "🌙" : "⭐"}</button>
        </div>
    )
}

export default ItemListContainer;