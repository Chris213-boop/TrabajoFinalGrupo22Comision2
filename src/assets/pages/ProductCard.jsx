// Componente para mostrar cada producto en una tarjeta.
import {Container, Button, Card, Row, Col, Badge } from 'react-bootstrap';

const DetalleProducto = ({ producto, volver }) => {
    if (!producto) {
        return (
            <Container className="mt-4">
                <p className="text-danger text-center">No se encontró el producto seleccionado.</p>
                <Button variant="secondary" onClick={volver}>Volver</Button>
            </Container>
        );
    }

    const descuento = parseFloat(producto.rating.rate); //convertimos el valor del descuento en numero para poder trabajarlo

    return (
        <Container>
            <Card className="detalle-container">
                <Row>
                    <Col md={5} className="d-flex align-items-center justify-content-center">
                        <Card.Img
                            src={producto.image || "https://via.placeholder.com/250"}
                            alt={producto.title}
                            className="detalle-img"
                        />
                    </Col>
                    <Col md={7}>
                        <h4 className="detalle-titulo">{producto.title}</h4>

                        <div className="detalle-precio">
                            ${(producto.price * (1 - descuento / 100)).toFixed(2)}
                            <Badge bg="light" text="success" className="ms-2">{producto.rating.rate} % OFF</Badge>
                        </div>
                        <div className="detalle-descuento">
                            Antes: <s>${(producto.price).toFixed(2)}</s>
                        </div>

                        <div className="detalle-descripcion">
                            <p><strong>ID:</strong> {producto.id}</p>
                            <p><strong>Descripción:</strong> {producto.description}</p>
                            <p><strong>Categoría:</strong> {producto.category}</p>
                            <p><strong>Cantidad:</strong> {producto.rating.count}</p>
                            <p><strong>Estado:</strong> {producto.estado}</p>
                            <p><strong>Favorito:</strong> {producto.favorito ? 'Sí' : 'No'}</p>
                        </div>

                        <Button
                            variant="outline-secondary"
                            onClick={volver}
                            className="detalle-boton"
                        >
                            ← Volver
                        </Button>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default DetalleProducto;
