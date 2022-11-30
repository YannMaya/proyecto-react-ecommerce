import React from 'react'
import CustomButton from "../customButton/CustomButton"
import ItemCount from '../itemCount.js/ItemCount'

const ItemListContainer = ( { greetings } ) => {
    return (
        <div>
            <h2>{greetings}</h2>
            <CustomButton text={"login"}/>
            <ItemCount x={"+"}/>
        </div>
    )
}

export default ItemListContainer