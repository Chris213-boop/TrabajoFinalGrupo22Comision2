import { Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import Layout from '../pages/Layout';
import Error from '../pages/Error';
import LoginPage from '../pages/LoginPage';
import Favoritos from '../pages/Favoritos';
import BuscarProducto from "../components/BuscarProducto"
import ProductosEliminados from "../pages/ProductosEliminados";
import ProductosFavoritos from '../pages/ProductosFavoritos';
import MostrarListaProductos from '../components/MostrarProducts';

function Rutas() {
    return (
        <Container fluid>
            <Routes>
                <Route path='/' element={<Layout />}>
                    {/* <Route index element={<Home />} /> */}
                    <Route index element={<LoginPage/>} />
                    <Route path="home" element={<Home />} />
                    <Route path="/productos" element={<MostrarListaProductos />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                    <Route path="/eliminados" element={<ProductosEliminados />} />
                    <Route path="/prodFav" element={<ProductosFavoritos />} />
                    <Route path="/buscar" element={<BuscarProducto />} />
                    <Route path="*" element = {<Error/>} />
                </Route>
            </Routes>
        </Container>
    );
}

export default Rutas;