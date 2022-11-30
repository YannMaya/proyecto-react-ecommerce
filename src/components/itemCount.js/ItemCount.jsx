import { useState } from "react"

const ItemCount = ({x}) => {

    const [contador, setContador] = useState(1)

    const sum = () =>{
        setContador(contador + 1)
    }

    return (
        <>
            <button onClick={sum}>{x}</button>
            <h1>{contador}</h1>
        </>
    )
}

export default ItemCount

