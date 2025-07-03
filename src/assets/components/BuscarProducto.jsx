import { useState } from 'react';
import { Form, Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useProductos } from '../hooks/useProductos';
import useAut from '../hooks/useAut';
import { useNavigate } from 'react-router-dom';
import DetalleProducto from '../pages/ProductCard';
import ModificarProducto from "../components/ModificarProducto";

function BuscarProducto() {
  const { productos, favoritoProducto, eliminarProducto, buscarProductos, modificarProducto } = useProductos();
  const [busqueda, setBusqueda] = useState('');
  const { user, isAuthenticated } = useAut();

  const navigate = useNavigate();

  const manejarFavorito = (idProducto) => {
    if (!isAuthenticated) {
      alert("Debe iniciar sesión para marcar productos como favoritos.");
      navigate('/');
    } else {
      favoritoProducto(idProducto);
    }
  };

  // Estados para filtros
  const [buscarPorId, setBuscarPorId] = useState(false);
  const [buscarPorNombre, setBuscarPorNombre] = useState(true);
  const [buscarPorCategoria, setBuscarPorCategoria] = useState(true);

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const [productoAModificar, setProductoAModificar] = useState(null);

  if (productoSeleccionado) {
    return (
      <DetalleProducto
        producto={productoSeleccionado}
        volver={() => setProductoSeleccionado(null)}
      />
    );
  }

  const productosActivos = productos.filter(producto => producto.estado === "activo");

  const filtrarProductosResultado = buscarProductos(productosActivos, busqueda, {
    porId: buscarPorId,
    porNombre: buscarPorNombre,
    porCategoria: buscarPorCategoria
  });



  return (
    <Container className="mt-4">
      <h4 className="text-center mb-4">
        <Badge bg="secondary" className="p-2">🔍 Buscar Productos</Badge>
      </h4>

      {/* Barra */}
      <Form.Group className="mb-3" controlId="barraBusqueda">
        <Form.Control
          type="text"
          placeholder="Buscar por ID, nombre o categoría"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </Form.Group>

      {/* casillas de filtros */}
      <Form.Group className="mb-4">
        <Form.Check
          type="checkbox"
          label="Buscar por ID"
          checked={buscarPorId}
          onChange={() => setBuscarPorId(!buscarPorId)}
          inline
        />
        <Form.Check
          type="checkbox"
          label="Buscar por Nombre"
          checked={buscarPorNombre}
          onChange={() => setBuscarPorNombre(!buscarPorNombre)}
          inline
        />
        <Form.Check
          type="checkbox"
          label="Buscar por Categoría"
          checked={buscarPorCategoria}
          onChange={() => setBuscarPorCategoria(!buscarPorCategoria)}
          inline
        />
      </Form.Group>

      {/* Resultados */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {filtrarProductosResultado.length === 0 ? (
          <p className="text-muted text-center">No se encontraron productos.</p>
        ) : (

          filtrarProductosResultado.map((producto) => (

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

                    <Button
                      variant={producto.favorito ? 'outline-danger' : 'outline-primary'}
                      onClick={() => manejarFavorito(producto.id)}
                      className="mt-2 me-2"
                    >
                      {producto.favorito ? '💔' : '❤️'}
                    </Button>

                    {/* Solo visible para ADMINISTRADOR */}
                    {isAuthenticated && user?.rol === "ADMINISTRATIVO" && (
                      <Button
                        variant={producto.estado === 'activo' ? 'danger' : 'success'}
                        onClick={() => {
                          const confirmado = window.confirm(`¿Estás seguro de que querés eliminar el producto "${producto.title}"?`);
                          if (confirmado) {
                            eliminarProducto(producto.id);
                          }
                        }}
                        className="mt-2 me-2"
                      >
                        {producto.estado === 'activo' ? 'Eliminar' : 'Reactivar'}
                      </Button>
                    )}

                    <Button
                      variant="info"
                      onClick={() => setProductoSeleccionado(producto)}
                      className="mt-2 me-2"
                    >
                      Ver Detalle
                    </Button>

                    {isAuthenticated && user?.rol === "ADMINISTRATIVO" && (
                      <>
                        <Button
                          variant="warning"
                          onClick={() => setProductoAModificar(producto)}
                          className="mt-2 me-2"
                        >
                          Modificar
                        </Button>
                      </>
                    )}

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}

        {productoAModificar && (
          <ModificarProducto
            producto={productoAModificar}
            onGuardar={modificarProducto}
            onCerrar={() => setProductoAModificar(null)}
          />
        )}

      </Row>
    </Container>
  );
}

export default BuscarProducto;