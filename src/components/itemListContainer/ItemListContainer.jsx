import React from 'react'
import CustomButton from "../customButton/customButton"

const ItemListContainer = ( { greetings } ) => {
    return (
        <div>
            <h2>{greetings}</h2>
            <CustomButton />
        </div>
    )
}

export default ItemListContainer