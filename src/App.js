import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Navegacion from "./components/navBar/NavBar";

function App() {
  return (
    <div>
      <Navegacion />
      <ItemListContainer greetings={"Buenas, ¿cómo le va?"}/>
    </div>
  );
}

export default App;

//componentes en mayuscula siempre