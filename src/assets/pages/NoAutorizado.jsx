import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NoAutorizado = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "70vh" }}
    >
      <Card className="text-center shadow-sm" style={{ maxWidth: "500px" }}>
        <Card.Header as="h5" className="bg-danger text-white">
          🚫 Acceso Denegado
        </Card.Header>
        <Card.Body>
          <Card.Title>No tienes permiso para estar aquí</Card.Title>
          <Card.Text>
            Lo sentimos, pero no tienes los permisos necesarios para acceder a
            esta página. Esta sección es exclusiva para usuarios con roles
            específicos.
          </Card.Text>
          <Button as={Link} to="/home" variant="primary">
            Volver a la Página de Inicio
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NoAutorizado;
