import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from "react-bootstrap/Container";
import Badge from 'react-bootstrap/Badge';

import DetalleProducto from '../pages/ProductCard'; // Usando el DetalleProducto existente (exportado desde ProductCard.jsx)

function BuscarProducto({ productos }) {
  const [valorBusqueda, setValorBusqueda] = useState('');
  const [resultado, setResultado] = useState(null);
  const [noEncontrado, setNoEncontrado] = useState(false);
  const [inactivo, setInactivo] = useState(false);   // Para mensajes si el producto encontrado está inactivo

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valorBusqueda.trim()) {
        setNoEncontrado(false); // Limpiar mensajes si la búsqueda está vacía
        setInactivo(false);
        setResultado(null);
        return;
    }

    const busquedaNormalizada = valorBusqueda.toLowerCase().trim();
    // Lógica de búsqueda directa en el componente
    const res = productos.find(p =>
        String(p.id).toLowerCase().includes(busquedaNormalizada) ||
        (p.title && p.title.toLowerCase().includes(busquedaNormalizada)) || // Asegúrate que p.title exista
        (p.category && p.category.toLowerCase().includes(busquedaNormalizada)) // Asegúrate que p.category exista
        // Puedes añadir más campos a la búsqueda si es necesario
    );

    if (res) {
      // Asumiendo que tus productos tienen una propiedad 'estado' (booleano)
      // que indica si el producto está activo o no.
      // El componente DetalleProducto usa 'producto.estado'
      if (res.estado === true) { // Verifica si el producto está activo
        setResultado(res);
        setNoEncontrado(false);
        setInactivo(false);
      } else {
        // Producto encontrado pero está inactivo
        setResultado(null); // No mostramos el detalle si está inactivo
        setNoEncontrado(false);
        setInactivo(true); // Mostramos mensaje de producto inactivo
      }
    } else {
      // Producto no encontrado
      setResultado(null);
      setNoEncontrado(true);
      setInactivo(false);
    }
  };

  if (resultado) {
    return (
      <DetalleProducto
        producto={resultado}
        volver={() => {
          setResultado(null);
          setValorBusqueda(''); // Limpiar campo de búsqueda al volver
          setNoEncontrado(false);
          setInactivo(false);
        }}
      />
    );
  }

  return (
    <Container className="mt-4">
      <h2><Badge bg="primary">Buscar Producto</Badge></h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="busquedaProducto">
          <Form.Label>Buscar por ID, Nombre o Categoría del Producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 1 o Backpack o men's clothing"
            value={valorBusqueda}
            onChange={(e) => {
                setValorBusqueda(e.target.value);
                // Opcional: limpiar mensajes mientras el usuario escribe
                if (noEncontrado) setNoEncontrado(false);
                if (inactivo) setInactivo(false);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Buscar
        </Button>
      </Form>
      {noEncontrado && (
        <Alert variant="danger" className="mt-3">
          Producto no encontrado. Por favor, intente con otros términos de búsqueda.
        </Alert>
      )}

      {inactivo && (
        <Alert variant="warning" className="mt-3">
          El producto fue encontrado pero se encuentra inactivo y no puede ser consultado en detalle.
        </Alert>
      )}
    </Container>
  );
}

export default BuscarProducto;
