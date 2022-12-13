
import React from "react"

const ItemDetail = ({product}) => {
    return (
            <>
                <h2>{product.name}</h2>
                <h2>${product.price}</h2>
                <h2>{product.description}</h2>
                <img src={product.img} alt="unas" />
            </>
    )
}

export default ItemDetail