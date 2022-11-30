//hook =  funciones incorporadas en react
//useState = estado = variables

import {useState} from "react"

const CustomButton = ({text}) => {

    /* const miEstado = useState(20)
    let counter = miEstado[0]
    let setCounter = miEstado[1] */

    const [counter, setCounter] = useState(0)

    console.log(counter)
    console.log(setCounter)

    /* let counter = 0; */

    /* const sumar = () =>{
        //mutando el valor del contador (reasignar valor)
        setCounter(counter + 1)
    } */
    
    return (
    <>    
        <button onClick={setCounter}>{text}</button>
        
    </>
)
}

export default CustomButton