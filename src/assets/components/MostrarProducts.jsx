import { Container, Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { useState } from 'react';
import ProductCard from '../pages/ProductCard';
import { useProductos } from '../hooks/useProductos';
import useAut from '../hooks/useAut';

function MostrarListaProductos() {
    //aqui consumimos los Productos y las funciones agregar, modificar, etc.
    const { productos, agregarProducto, eliminarProducto, favoritoProducto } = useProductos();
    const { user, isAuthenticated } = useAut();

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
                <Badge bg="info" className="p-2">📦 Productos</Badge>
            </h4>
            <Row xs={1} md={2} lg={3} className="g-4">
                {productos.length === 0 ? (
                    <p className="text-muted text-center">No hay productos disponibles.</p>
                ) : (
                    productos.map((producto) => (
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

                                        {(isAuthenticated && (user?.rol === "CLIENTE")) && (
                                            <Button
                                                variant={producto.favorito ? 'outline-danger' : 'outline-primary'}
                                                onClick={() => favoritoProducto(producto.id)}
                                                className="mt-2 me-2"
                                            >
                                                {producto.favorito ? '💔 Favorito' : '❤️ Favorito'}
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

export default MostrarListaProductos;
