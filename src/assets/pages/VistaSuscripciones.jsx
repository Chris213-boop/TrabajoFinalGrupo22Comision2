import { useSuscripciones } from "../hooks/useSuscripciones";
import { Container, Card, ListGroup, Badge } from "react-bootstrap";

const VistaSuscripciones = () => {
  const { suscripciones = [] } = useSuscripciones();

  return (
    <Container className="mt-4">
      <Card className="shadow-sm">
        <Card.Header as="h5" className="bg-dark text-white">
          📧 Lista de Suscriptores
          <Badge bg="primary" className="ms-2">
            {suscripciones.length}
          </Badge>
        </Card.Header>
        <Card.Body>
          {suscripciones.length > 0 ? (
            <ListGroup variant="flush">
              {suscripciones.map((email, index) => (
                <ListGroup.Item key={index}>
                  {index + 1}.{email}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p className="text-muted">No hay suscriptores registrados.</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default VistaSuscripciones;
