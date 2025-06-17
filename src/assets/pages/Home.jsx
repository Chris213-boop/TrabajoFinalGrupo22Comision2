//pagina principal
import MostrarProductos from "../components/MostrarProducts";
import { Container, Card, Carousel} from 'react-bootstrap';

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
            </Card>
        </Container>
    )
}

export default Home;