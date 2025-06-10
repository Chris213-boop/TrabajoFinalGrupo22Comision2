import { Routes, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';


function Rutas() {
    return (
        <Container fluid>
            <Navbar expand="lg" className="bg-body-tertiary" >
                <Container fluid>
                    <Navbar.Brand href="#">Principal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                             className="me-auto my-2 my-lg-0"
                              style={{ maxHeight: '100px' }}
                              navbarScroll >
                                  <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                                  <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
                            </Nav>
                        
                        <NavDropdown title="Ropa Masculina" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#Pantalones">Pantalones</NavDropdown.Item>
                            <NavDropdown.Item href="#Remeras">
                                Remeras
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#Zapatillas">
                                Zapatillas
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Ropa Femenina" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#Pantalones">Pantalones</NavDropdown.Item>
                            <NavDropdown.Item href="#Remeras">
                                Remeras
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#Zapatillas">
                                Zapatillas
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Joyas" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#Pantalones">Oro</NavDropdown.Item>
                            <NavDropdown.Item href="#Remeras">
                                Plata
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#Zapatillas">
                                Acero
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
            </Routes>
        </Container>
    );
}

export default Rutas;