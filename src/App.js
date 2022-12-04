import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Navegacion from "./components/navBar/NavBar";
/* import CustomButton from "./components/customButton/CustomButton"; */

function App() {
  return (
    <div>
      <Navegacion />
      <ItemListContainer greetings={"Buenas, ¿cómo le va?"}/>
      {/* <CustomButton text={"logout"}/> */}
    </div>
  );
}

export default App;

//componentes en mayuscula siempre