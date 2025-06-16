import { Container, Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { useState } from 'react';
import ProductCard from './ProductCard';
import { useProductos } from '../hooks/useProductos';
import Favoritos from './Favoritos';

function MostrarListaProductos() {
    //aqui consumimos los Productos y las funciones agregar, modificar, etc.
    const { productos, agregarProducto, eliminarProducto, favoritoProducto } = useProductos();

    const productosFavoritos = productos.filter(p => p.favorito === true);
    const productosNoFavoritos = productos.filter(p => !p.favorito);

    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    if (productoSeleccionado) {
        return (
            <ProductCard
                producto={productoSeleccionado}
                volver={() => setProductoSeleccionado(null)}
            />
        );
    }

    const CardsProductos = (lista, titulo, color) => (
        <div className="mb-4">
            <h4 className="text-center mb-3">
                <Badge bg={color} className="p-2">{titulo}</Badge>
            </h4>
            <Row xs={1} md={2} lg={3} className="g-4">
                {lista.length === 0 ? (
                    <p className="text-muted text-center">No hay productos en esta categoría.</p>
                ) : (
                    lista.map((producto) => (
                        <Col key={producto.id}>
                            <Card className="h-100 shadow-sm">
                                <Card.Img
                                    variant='top' className="img-fluid mx-auto d-block mt-4"
                                    src={producto.image || "https://via.placeholder.com/150"}
                                    alt={`Imagen de ${producto.title}`}
                                    style={{ width: '150px', height: '150px', objectFit: 'contain', marginBottom: '20px' }}
                                />
                                <Card.Body>
                                    <Card.Title>{producto.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Categoría: {producto.category}</Card.Subtitle>
                                    <Card.Text>
                                        <strong>Precio:</strong> ${producto.price}<br />
                                        {/* <strong>Favorito:</strong>{' '}
                                        <Badge bg={producto.favorito ? 'success' : 'secondary'}>
                                            {producto.favorito ? 'Sí' : 'No'}
                                        </Badge> */}
                                        <Button
                                            variant={producto.favorito ? 'outline-danger' : 'outline-primary'}
                                            onClick={() => favoritoProducto(producto.id)}
                                            className="mt-2 me-2"
                                        >
                                            {producto.favorito ? '💔 Favorito' : '❤️ Favorito'}
                                        </Button>


                                        <Button
                                            variant={producto.estado === 'activo' ? 'danger' : 'success'}
                                            onClick={() => eliminarProducto(producto.id)}
                                            className="mt-2 me-2"
                                        >
                                            {producto.estado === 'activo' ? 'Eliminar producto' : 'Reactivar producto'}
                                        </Button>

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
        </div>
    );

    return (
        <Container className="mt-4">
            {CardsProductos(productosFavoritos, '⭐ Productos Favoritos', 'primary')}
            {CardsProductos(productosNoFavoritos, '🛒 Otros Productos', 'warning')}
        </Container>
    );
}

export default MostrarListaProductos;
