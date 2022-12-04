import {useState, useEffect} from "react";
import ProductCard from "../ProductCard/ProductCard";

const ItemList = () => {
    const [items, setItems] = useState([]); //reiniciar el estado con el tipo de dato que se espera
    useEffect(()=>{

        const tarea = new Promise ((resolve, reject)=>{
            setTimeout(()=>{resolve(productos)}, 2000);
        });
    
        tarea
            .then((res)=>{setItems(res)})//aqui se recibe ese arreglo
            .catch((err)=>{console.log("rechazado")});
        }, []);
        console.log(items);

    {items.map((elemento)=>{
        return (
        <items key={elemento.name}  elemento={elemento}/>
    );
})}



export default ItemList;