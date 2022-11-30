import {useState } from "react"
import CustomButton from "../customButton/CustomButton"
import ItemCount from '../itemCount.js/ItemCount'
import "./ItemListContainer.css"

const ItemListContainer = ( { greetings } ) => {

    const [modoOscuro, setModoOscuro] = useState(false)

    const cambiarModoOscuro = ()=>{
        setModoOscuro(!modoOscuro)
    }

    return (
        <div className={modoOscuro ? "container-items-dark" : "container-items-light"}>
            <h2>{greetings}</h2>
            <CustomButton text={"login"}/>
            <ItemCount />
            <button onClick={cambiarModoOscuro}>{modoOscuro ? "🌙" : "⭐"}</button>
        </div>
    )
}

export default ItemListContainer