import { Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import Layout from '../pages/Layout';
import Error from '../pages/Error';
import LoginPage from '../pages/LoginPage';


function Rutas() {
    return (
        <Container fluid>
            <Routes>
                <Route path='/' element={<Layout />}>
                    {/* <Route index element={<Home />} /> */}
                    <Route index element={<LoginPage/>} />
                    <Route path="home" element={<Home />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="*" element = {<Error/>} />
                </Route>
            </Routes>
        </Container>
    );
}

export default Rutas;