//hook =  funciones incorporadas en react
//useState = estado = variables

import {useState} from "react"

const CustomButton = ({text}) => {

    const [counter, setCounter] = useState(0)

    const sumar = ()=>{
        setCounter(counter + 1)
    }


    return (
        
        <>
            <button onClick={sumar}>{text}</button>
            <h2>{counter}</h2>
        </>
)
}

export default CustomButton