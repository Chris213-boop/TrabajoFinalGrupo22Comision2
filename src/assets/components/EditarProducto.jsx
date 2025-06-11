import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/esm/Container";

function ProductoEdit({ productos, onUpdate }) {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [subtipo, setSubtipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [activo, setActivo] = useState(true);

  const opcionesSubtipo = {
    "Ropa Masculina": ["Pantalones", "Remeras", "Zapatillas"],
    "Ropa Femenina": ["Pantalones", "Remeras", "Zapatillas"],
    Joya: ["Oro", "Plata", "Acero"],
  };
  const handleSelectChange = (e) => {
    const idSeleccionado = Number(e.target.value);
    setId(idSeleccionado);
    const producto = productos.find((p) => p.id === idSeleccionado);
    if (producto) {
      setNombre(producto.nombre);
      setTipo(producto.tipo);
      setSubtipo(producto.subtipo);
      setDescripcion(producto.descripcion);
      setPrecio(producto.precio);
      setStock(producto.stock);
      setActivo(producto.activo);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) return;
    const precioNum = parseFloat(precio);
    const stockNum = parseInt(stock);
    if (
      nombre.trim().length < 3 ||
      tipo === "" ||
      subtipo === "" ||
      descripcion.trim().length < 5 ||
      isNaN(precioNum) ||
      precio <= 0 ||
      isNaN(stockNum) ||
      stock < 0
    ) {
      alert("Por favor completá correctamente todos los campos.");
      return;
    }

    onUpdate({
      id,
      nombre,
      tipo,
      subtipo,
      descripcion,
      precio: precioNum,
      stock: stockNum,
      activo,
    });

    // limpiar
    setId("");
    setNombre("");
    setTipo("");
    setSubtipo("");
    setDescripcion("");
    setPrecio("");
    setStock("");
    setActivo(true);
  };

  return (
    <Container>
      <h2>
        <Badge bg="primary">Editar producto</Badge>
      </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} md="10" className="mb-3">
          <FloatingLabel
            controlId="floatingSelect"
            label="Selecciona un producto:"
          >
            <Form.Select value={id} onChange={handleSelectChange}>
              <option value="">-- Elige un producto --</option>
              {productos.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nombre} ({p.id})
                </option>
              ))}
            </Form.Select>
          </FloatingLabel>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="tipo">
            <Form.Label>Tipo</Form.Label>
            <Form.Select
              value={tipo}
              onChange={(e) => {
                setTipo(e.target.value);
                setSubtipo("");
              }}
            >
              <option value="">-- Selecciona tipo --</option>
              {Object.keys(opcionesSubtipo).map((tipoOp) => (
                <option key={tipoOp} value={tipoOp}>
                  {tipoOp}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="subtipo">
            <Form.Label>Subtipo</Form.Label>
            <Form.Select
              value={subtipo}
              onChange={(e) => setSubtipo(e.target.value)}
              disabled={!tipo}
            >
              <option value="">-- Selecciona subtipo --</option>
              {tipo &&
                opcionesSubtipo[tipo]?.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="precio">
            <Form.Label>precio </Form.Label>
            <Form.Control
              type="number"
              min="0"
              step="0.01"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese precio valido
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="stock">
            <Form.Label>stock</Form.Label>
            <Form.Control
              type="number"
              min="0"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} md="10" className="mb-3">
            <FloatingLabel controlId="floatingDesc" label="Descripcion">
              <Form.Control
                as="textarea"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Form.Group>
          <Form.Check
            type="switch"
            checked={activo}
            onChange={(e) => setActivo(e.target.checked)}
            label="producto Activo"
          />
        </Form.Group>

        <Form.Group>
          <Button type="submit" variant="primary" size="lg">
            Guardar Cambios
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default ProductoEdit;
