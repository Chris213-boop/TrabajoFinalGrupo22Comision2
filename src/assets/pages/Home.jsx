//pagina principal
import MostrarProductos from "./MostrarProducts";
import { Container, Card, Carousel, Row, Col, Button, Image } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>
                        ¡Hola, mente creativa!
                    </Card.Title>
                    <Card.Text>
                        Bienvenido a StyleScript — donde el estilo se escribe en código y cada prenda compila tu esencia única.
                        <br />
                        Es hora de que expreses tu estilo con la precisión de un script…
                        <br />
                        y el alma de un artista.
                    </Card.Text>
                    <Carousel className="mx-auto w-100" style={{ maxWidth: '1000px' }}>
                        <Carousel.Item interval={3000}>
                            <img text="First slide" src='/1.png' className="d-block w-100" />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img text="Second slide" src='/2.png' className="d-block w-100" />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img text="Third slide" src='/3.png' className="d-block w-100" />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img text="Third slide" src='/4.png' className="d-block w-100" />
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img text="Third slide" src='/5.png' className="d-block w-100" />
                        </Carousel.Item>
                    </Carousel>
                </Card.Body>
                <MostrarProductos/> {/*solo para prueba*/}
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
                                        <Image src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="32" thumbnail />
                                    </a>
                                </Col>
                                
                                <Col xs={6} md={4}>
                                    <a href="#" target="_blank">
                                        <Image src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="32" thumbnail />
                                    </a>
                                </Col>
                                <Col xs={6} md={4}>
                                    <a href="#" target="_blank">
                                        <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" width="32" thumbnail />
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
            </Card>
        </Container>
    )
}

export default Home;