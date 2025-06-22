import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import integrantesData from "../data/integrantesData.json";

function IntegranteCardDisplay({ integrante, delay = 0 }) {
  const { nombre, email, ciudad, dni, lu, facultad, imagenSrc, altText } =
    integrante;

  return (
    <Card className="integrante-card h-100" style={{ "--delay": delay }}>
      <Image src={imagenSrc} alt={altText} className="integrante-img" />
      <Card.Body>
        <Card.Title className="integrante-nombre">{nombre}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Dirección de correo:</strong>
            <br />
            <a
              href={`mailto:${email}`}
              className="text-decoration-none text-primary"
            >
              {email}
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Ciudad:</strong> {ciudad}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>DNI:</strong> {dni}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>LU:</strong> {lu || "-"}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Nombre de la Facultad/Escuela a la que pertenece:</strong>
            <br />
            {facultad}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer />
    </Card>
  );
}

function Nosotros() {
  return (
    <Card className="m-4 p-3 shadow bg-transparent border-0">
      <Card.Body>
        <Row xs={1} md={2} lg={3} xl={5} className="g-4">
          {integrantesData.map((integrante, index) => (
            <Col key={index} className="mb-3">
              <IntegranteCardDisplay integrante={integrante} delay={index} />
            </Col>
          ))}
        </Row>
      </Card.Body>
      <Card.Footer className="text-center mt-3 bg-white">
        <small className="text-muted">
          Las marcas y logos de Grupo 22 son Propiedad de Programación Visual
          SRL. Todos los derechos reservados 2025®.
        </small>
      </Card.Footer>
    </Card>
  );
}

export default Nosotros;
