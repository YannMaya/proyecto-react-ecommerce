import {useState, useEffect} from "react";
/* import CustomButton from "../customButton/CustomButton" */
import ItemCount from '../itemCount.js/ItemCount';
import "./ItemListContainer.css";
import {productos} from "../../productos";
import Item from "../Item/Item";

const ItemListContainer = ( { greetings } ) => {

    const [modoOscuro, setModoOscuro] = useState(false);

    const [items, setItems] = useState([]); //reiniciar el estado con el tipo de dato que se espera

    const cambiarModoOscuro = ()=>{
        setModoOscuro(!modoOscuro)
    };

    const onAdd= () =>{
        console.log("hola")
    };


    useEffect(()=>{

        const tarea = new Promise ((resolve, reject)=>{
            setTimeout(()=>{resolve(productos)}, 2000);
        });
    
        tarea
            .then((res)=>{setItems(res)})//aqui se recibe ese arreglo
            .catch((err)=>{console.log("rechazado")});
        }, []);
        console.log(items);

    return (
        <div className={modoOscuro ? "container-items-dark" : "container-items-light"}>
            <h2>{greetings}</h2>
            {/* <CustomButton text={"login"}/> */}
            <ItemCount initial={1} onAdd={onAdd}/>
            <button onClick={cambiarModoOscuro}>{modoOscuro ? "🌙" : "⭐"}</button>
            {items.map((elemento)=>{
                    return (
                    <Item key={elemento.name}  elemento={elemento}/>
                );
            })}
        </div>
    );
};

export default ItemListContainer;

/* key={} esta es la key(propiedad)unica para identificar cada elemento despues de un map */