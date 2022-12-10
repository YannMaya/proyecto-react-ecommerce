import { useState, useEffect } from "react"
import ItemCount from '../itemCount/ItemCount'
import "./ItemListContainer.css"
import ProductCard from "../productCard/ProductCard";
import { productos } from "../../productos"; /* ./ misma altura del archivo */

const ItemListContainer = ({ greetings }) => {

    const [modoOscuro, setModoOscuro] = useState(false);
    const [items, setItems] = useState([]); /* inicializar con el tipo de dato a lo que pense que vamos a recibir */

    const cambiarModoOscuro = () => {
        setModoOscuro(!modoOscuro)
    }

    useEffect(() => {
        const peticion = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos); /* puede resolver un objeto, arreglo, numero*/
            }, 2000);
        });

        peticion
            .then((res) => {
                setItems(res); /* setItems me va a setear mi estado con lo que venga en la respuesta */
            })
            .catch((err) => {
                console.log("se rechazo");
            });

        console.log("se hizo la peticion");
    }, []);
    console.log(items)

    return (
        <div className={modoOscuro ? "container-items-dark" : "container-items-light"}>
            <h2>{greetings}</h2>
            <ItemCount initial={1} stock={10} />
            <button onClick={cambiarModoOscuro}>{modoOscuro ? "🌙" : "⭐"}</button>
            {
                items.map((elemento)=>{
                    return ( /* todo lo que voy a retornar esta dentro del parentesis */
                        <ProductCard key={elemento.id} elemento={elemento}/>
                    );    
            })
            }
        </div>
    )
}

export default ItemListContainer;