import CustomButton from "../customButton/CustomButton"
import { useState } from "react"

const Counter = ({stock, initial, onAdd}) => {

  const [counter, setCounter] = useState(initial)

  return (
    <div>
      <h2>{counter}</h2>
      <CustomButton text={"sumar"} counter={counter} setCounter={setCounter}/>
      <button>+</button>
      <button>-</button>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default Counter
//el padre es el que renderisa al hijo