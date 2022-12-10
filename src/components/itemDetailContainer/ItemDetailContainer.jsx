
import {productos} from "../../productos"
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState ({})

    const {id} = useParams()
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