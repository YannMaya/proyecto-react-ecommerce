import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Navegacion from "./components/navBar/NavBar";
import CustomButton from "./components/customButton/CustomButton";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div>
      <Navegacion />
      <ItemListContainer greetings={"Buenas, ¿cómo le va?"}/> {/* clave y valor */}
      <CustomButton text={"logout"}/>
      <Counter/>
    </div>
  );
}

export default App;

//componentes en mayuscula siempre