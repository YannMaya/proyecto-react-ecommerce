
import {productos} from "../../productos"
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState ({})

    const {id} = useParams() //es un hook que al ejecutarse me devuelve un objeto, y los parametros que se recuperan, se recuperan como string
    console.log(id)

    

    useEffect(()=>{
        const productoSeleccionado = productos.find(producto=>producto.id === +id)
        setProduct(productoSeleccionado)
    }, [id])

    console.log(useParams)          


    return (
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer;