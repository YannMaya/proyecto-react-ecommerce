import Counter from "./components/counter/Counter";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Navegacion from "./components/navBar/NavBar";

function App() {
  return (
    <div>
      <Navegacion />
      <Counter />
      <ItemListContainer greetings={"Buenas, ¿cómo le va?"}/>
    </div>
    
  );
}

export default App;

//componentes en mayuscula siempre
//si quiero pasar parametros, los paso en forma de atributos a={""} b={true}