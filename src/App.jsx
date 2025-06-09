import ProductCard from "./assets/pages/ProductCard"
import Productos from "./assets/data/Productos.json"
import MostrarProductos from "./assets/pages/MostrarProducts"

function App() {

  return (
    <>
    <h1>TRABAJO FINAL INTEGRADOR GRUPO 22 COMISIÓN 2</h1>
    <MostrarProductos productos={Productos}/>
    </>
  )
}

export default App
