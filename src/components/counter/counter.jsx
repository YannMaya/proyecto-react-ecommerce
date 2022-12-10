import CustomButton from "../customButton/CustomButton"
import { useState } from "react"

const Counter = () => {

  const [counter, setCounter] = useState(0)

    const sumar = () =>{
        setCounter(counter + 1)
    }

    const restar = () =>{
        setCounter(counter - 1)
    }

  return (
    <div>
      <h2>{counter}</h2>
      <CustomButton text={"sumar"} onClick={sumar} setCounter={setCounter} counter={counter}/>
      <CustomButton text={"restar"} onClick={restar} setCounter={setCounter} counter={counter}/> 
    </div>
  )
}

export default Counter
//el padre es el que renderisa al hijo