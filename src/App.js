import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Navegacion from "./components/navBar/NavBar";
/* import CustomButton from "./components/customButton/CustomButton"; */
/* import Counter from "./components/counter/Counter"; */
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {


  return (
    

    <BrowserRouter>
      
      <Navegacion />

      <Routes>

        <Route path="/" element={<ItemListContainer greetings={"Bienvenido a nuestra tienda"}/>}/> 
        
        <Route path="/category/:categoryName" element={<ItemListContainer greetings={"Bienvenido a nuestra tienda"}/>}/> 

        <Route path="/category" element={<ItemListContainer greetings={"Bienvenido a nuestra tienda"}/>}/> 

        <Route path="/itemDetail/:id" element={<ItemDetailContainer/>}/> 

        <Route path="/cart" element={<h3>carrito</h3>}/> 

        <Route path="*" element={<h2>LO SIENTO, ESTA PAGINA NO EXISTE</h2>}/> 

      </Routes>

    </BrowserRouter>
    

  );
}

export default App;

//componentes en mayuscula siempre

<div>
      
       {/* clave y valor */}
      {/* <CustomButton text={"logout"}/> */}
      {/* <Counter/> */}
      {/* "/" RUTA RAIZ*/}
    </div>