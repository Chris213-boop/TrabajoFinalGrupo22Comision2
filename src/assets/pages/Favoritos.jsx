// Página de Favoritos:
// Mostrar únicamente los productos que el usuario ha marcado como favoritos.
import { useProductos } from "../hooks/useProductos";
import { Container, Row, Col, Card, Badge, Button, Spinner, Alert } from "react-bootstrap";
import { useState } from 'react';
import ProductCard from "../pages/ProductCard"

function Favoritos() {
    const { productos, isLoading, error, favoritoProducto } = useProductos();

    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    if (productoSeleccionado) {
        return (
            <ProductCard
                producto={productoSeleccionado}
                volver={() => setProductoSeleccionado(null)}
            />
        );
    }

    // Filtrar productos que están marcados como favoritos
    const favoritos = productos.filter(producto => producto.favorito);

    if (isLoading) {
        return <div className="text-center mt-5"><Spinner animation="border" /> Cargando productos...</div>;
    }

    if (error) {
        return <Alert variant="danger" className="text-center mt-4">{error}</Alert>;
    }

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">⭐ Tus Productos Favoritos</h2>
            {favoritos.length === 0 ? (
                <p className="text-muted text-center">No hay productos marcados como favoritos.</p>
            ) : (
                <Row xs={1} md={2} lg={3} className="g-4">
                    {favoritos.map(producto => (
                        <Col key={producto.id}>
                            <Card className="h-100 shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={producto.image || "https://via.placeholder.com/150"}
                                    alt={producto.title}
                                    style={{ height: "200px", objectFit: "contain" }}
                                />
                                <Card.Body>
                                    <Card.Title>{producto.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Categoría: {producto.category}</Card.Subtitle>
                                    <Card.Text>
                                        <strong>Precio:</strong> ${producto.price}
                                    </Card.Text>

                                    <Button
                                        variant="outline-danger"
                                        onClick={() => favoritoProducto(producto.id)}
                                        className="me-2 mt-2"
                                    >
                                        💔 Quitar de Favoritos
                                    </Button>

                                    <Button
                                        variant="info"
                                        onClick={() => setProductoSeleccionado(producto)}
                                        className="mt-2"
                                    >
                                        Ver Detalle
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default Favoritos;