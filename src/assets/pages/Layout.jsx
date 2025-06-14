import { Outlet, Link } from 'react-router-dom';
import { Container, NavDropdown, Nav, Navbar, Row, Col, Button, Image, Card  } from 'react-bootstrap';

function Layout() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" >
                <Container fluid>
                    <Navbar.Brand>Principal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll >
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/home">Productos</Nav.Link>
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

            <section>
                <Outlet></Outlet>
            </section>

            <Card.Footer className="text-muted bg-light p-4">
                    <Row className="text-center mb-4">
                        <Col md={4}>
                            <h6>🚚 ENVÍOS A TODO EL PAÍS</h6>
                            <p>Gratis desde $100.000</p>
                        </Col>
                        <Col md={4}>
                            <h6>💳 CUOTAS SIN INTERÉS</h6>
                            <p>3 y 6 cuotas sin interés en compras mayores a $100.000</p>
                        </Col>
                        <Col md={4}>
                            <h6>💬 ATENCIÓN PERSONALIZADA</h6>
                            <p>Escribinos al WhatsApp: +54 342-5930997</p>
                        </Col>
                    </Row>
                    <Row className="text-left">
                        <Col md={4}>
                            <h6>MEDIOS DE PAGO</h6>
                            <p>Visa, MasterCard, Mercado Pago, etc.</p>

                        </Col>

                        <Col md={4}>
                            <h6>CONTACTANOS</h6>
                            <p>📞 +54 342-5930997</p>
                            <p>📧 contacto@stylescript.com</p>
                            <p>📍 San Salvador de Jujuy 2111</p>
                        </Col>

                        <Col md={4}>
                            <h6>REDES SOCIALES</h6>
                            <Row>
                                <Col xs={6} md={4}>
                                    <a href="#" target="_blank">
                                        <Image src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="32"  />
                                    </a>
                                </Col>
                                
                                <Col xs={6} md={4}>
                                    <a href="#" target="_blank">
                                        <Image src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="32"  />
                                    </a>
                                </Col>
                                <Col xs={6} md={4}>
                                    <a href="#" target="_blank">
                                        <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" width="32"  />
                                    </a>
                                </Col>
                            </Row>
                            <h6 className="mt-3">SUSCRÍBETE!!!</h6>
                            <input
                                type="email"
                                placeholder="Tu email"
                                className="form-control mb-2" />
                            <Button variant="link">Suscribirme</Button>
                        </Col>
                    </Row>
                    <Row className="text-center mt-3">
                        <Col>
                            © StyleScript -G22- 2025. Todos los derechos reservados.
                            <br />
                            Hecho con 💻 y 💎 para que brilles más.
                        </Col>
                    </Row>
                </Card.Footer>
        </>
    );
}
export default Layout;