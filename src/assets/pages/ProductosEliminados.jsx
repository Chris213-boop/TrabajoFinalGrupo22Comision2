
import { Container, Card, Row, Col, Badge, Button, Image } from 'react-bootstrap';
import { useState } from 'react';
import ProductCard from './ProductCard';
import { useProductos } from '../hooks/useProductos';
import useAut from '../hooks/useAut';

function ProductosEliminados() {
    const { productos, eliminarProducto } = useProductos();
    const { user, isAuthenticated } = useAut();

    const productosEliminados = productos.filter(producto => producto.estado === 'inactivo');

    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    if (productoSeleccionado) {
        return (
            <ProductCard
                producto={productoSeleccionado}
                volver={() => setProductoSeleccionado(null)}
            />
        );
    }

    return (
        <Container className="mt-4">
            <h4 className="text-center mb-3">
                <Badge bg="danger" className="p-2">🗑️ Productos Eliminados</Badge>
            </h4>
            <Row xs={1} md={2} lg={3} className="g-4">
                {productosEliminados.length === 0 ? (
                    <Card className="mx-auto">
                        <Image src= '/public/StitchEliminados.png' alt='No hay productos Eliminados'/>
                        {/* <p className="text-muted text-center">No hay productos eliminados.</p> */}
                    </Card>
                ) : (
                    productosEliminados.map((producto) => (
                        <Col key={producto.id}>
                            <Card className="h-100 shadow-sm">
                                <Card.Img
                                    variant="top"
                                    className="img-fluid mx-auto d-block mt-4"
                                    src={producto.image || "https://via.placeholder.com/150"}
                                    alt={`Imagen de ${producto.title}`}
                                    style={{
                                        width: '150px',
                                        height: '150px',
                                        objectFit: 'contain',
                                        marginBottom: '20px'
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title>{producto.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Categoría: {producto.category}
                                    </Card.Subtitle>
                                    <Card.Text>
                                        <strong>Precio:</strong> ${producto.price}<br />

                                        {isAuthenticated && user?.rol === "ADMINISTRATIVO" && (
                                            <Button
                                                variant="success"
                                                onClick={() => eliminarProducto(producto.id)} // reactiva el producto
                                                className="mt-2 me-2"
                                            >
                                                Reactivar
                                            </Button>
                                        )}
                                    </Card.Text>
                                    <Button
                                        variant="info"
                                        onClick={() => setProductoSeleccionado(producto)}
                                        className="mt-2 me-2"
                                    >
                                        Ver Detalle
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
}

export default ProductosEliminados;