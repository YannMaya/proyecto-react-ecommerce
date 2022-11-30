import { useState } from "react"

const ItemSubtract = ({y}) => {

    const [contador, setContador] = useState(1)

    const restar = () =>{
        setContador(contador - 1)
    }

    return (
        <>
            <button onClick={restar}>{y}</button>
            <h1>{contador}</h1>
        </>
    )
}

export default ItemSubtract