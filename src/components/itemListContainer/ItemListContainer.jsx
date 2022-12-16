import { useState, useEffect } from "react"
import ItemCount from '../itemCount/ItemCount'
import "./ItemListContainer.css"
import { productos } from "../../productos"; /* ./ misma altura del archivo */
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greetings }) => {

    const {categoryName} = useParams()
    console.log(categoryName)


    const [modoOscuro, setModoOscuro] = useState(false);
    const [items, setItems] = useState([]); /* inicializar con el tipo de dato a lo que pense que vamos a recibir */
    /* const [posts, setPosts] = useState([]) */

    /* const createPost = ()=>{
        
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                usedId: 2,
                title: "prueba",
                body: "otra prueba"
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res=>res.json()) 
        .then(res=>setPosts(res)) 
    } */

    const cambiarModoOscuro = () => {
        setModoOscuro(!modoOscuro)
    }

    useEffect(() => {

        const productosFiltrados = productos.filter(productos => productos.description === categoryName)

        const peticion = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(categoryName ? productosFiltrados : productos); /* puede resolver un objeto, arreglo, numero*/
            }, 500);
        });

        peticion
            .then((res) => {
                setItems(res); /* setItems me va a setear mi estado con lo que venga en la respuesta */
            })
            .catch((err) => {
                console.log("se rechazo");
            });

        console.log("se hizo la peticion");
    }, [categoryName]);

/*    useEffect(()=>{
        const getPost = fetch("https://jsonplaceholder.typicode.com/posts/2")
        getPost
        .then((res)=>res.json())
        .then((res)=>setPosts(res))
    }, []) */



    return (
        <div className={modoOscuro ? "container-items-dark" : "container-items-light"}>
            <h2>{greetings}</h2>
            <ItemCount initial={1} stock={10} />
            <button onClick={cambiarModoOscuro}>{modoOscuro ? "🌙" : "⭐"}</button>
            <ItemList items={items}/>
            {/* <button onClick={createPost}>Crear</button> */}
            {/* <button onClick={()=>createPost("hola")}>Crear</button> asi lo puedo utilizar cuando necesito utilizar parametros y no quiera que se active de inmediate al cargar la pagina*/}
        </div>
    )
}

export default ItemListContainer;