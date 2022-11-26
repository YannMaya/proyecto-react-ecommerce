//hook funciones incorporadas en react
//useState = estado

import {useState} from "react"

const CustomButton = () => {

    const miEstado = useState()
    console.log(miEstado)

    const counter = 0

    const sumar = () =>{
        //mutando el valor del contador (reasignar valor)
        counter ++
    }
    
    return (
    <>    
        <button onClick={sumar}>Click aquí</button>
        <h2>{counter}</h2>
    </>
)
}

export default CustomButton