import { useEffect, useState } from "react"
import "./ItemListContainer.css"

const ItemListContainer = ( { greetings } ) => {

    const [isDark , setIsDark] = useState(false)
    const [num , setNum ] = useState(0)

    const tooggleMode = () =>{
        setIsDark(!isDark) //flag state
    }

    console.log(isDark)
    useEffect(()=>{console.log("hola desde el efecto con array de dependencias")},[num])//arreglo de dependencias, se monta solo la primera vez que se monta el componente. Manejar tareas pesadas que quiero mantener y no pedir cada vez que se haga una peticion 

    return (
        <div className={isDark ? "container-items-dark" : "container-items-light"}>
            <h2>{greetings}</h2>
            <button onClick={tooggleMode}>{isDark ? "cambiar a modo claro" : "cambiar a modo oscuro"}</button>
            <button onClick={()=>setNum(num + 1)}>sumar</button>
        </div>
    )
}

export default ItemListContainer

//useEffect se dispara al final de que se cargan todas las partes del componente