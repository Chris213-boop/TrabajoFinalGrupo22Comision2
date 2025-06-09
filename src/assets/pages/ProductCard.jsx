// Componente para mostrar cada producto en una tarjeta.

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const DetalleProducto = ({ producto, volver }) => {
    if (!producto) {
        return (
            <Container className="mt-4">
                <p className="text-danger text-center">No se encontró el producto seleccionado.</p>
                <Button variant="secondary" onClick={volver}>Volver</Button>
            </Container>
        );
    }

    return (
        <Container>
            <Card className="mt-4 shadow">
                <Card.Header className="bg-primary text-white">
                    <h4>Detalle del Producto</h4>
                </Card.Header>
                <Card.Body>
                    <Card.Img
                        variant="top"
                        src={producto.image || "https://via.placeholder.com/150"}
                        alt={`Imagen de ${producto.title}`}
                        style={{ width: '150px', height: '150px', objectFit: 'contain', marginBottom: '20px' }}
                    />
                    <p><strong>ID:</strong> {producto.id}</p>
                    <p><strong>Nombre:</strong> {producto.title}</p>
                    <p><strong>Precio:</strong> ${producto.price}</p>
                    <p><strong>Descripción:</strong> {producto.description}</p>
                    <p><strong>Categoría:</strong> {producto.category}</p>
                    <p><strong>Estado:</strong> {producto.estado ? 'Activo' : 'Inactivo'}</p>
                    <p><strong>Favorito:</strong> {producto.favorito ? 'Sí' : 'No'}</p>

                    <div className="mt-3">
                        <Button variant="secondary" onClick={volver} className="me-2">
                            Volver
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default DetalleProducto;
