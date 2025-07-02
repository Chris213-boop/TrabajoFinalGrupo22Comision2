import { Container, Row, Col, Card, Image, Badge } from "react-bootstrap";
import useAut from "../hooks/useAut";
import { Navigate } from "react-router-dom";

const MiPerfil = () => {
  const { user } = useAut();

  if (!user) {
    return <Navigate to="/" />;
  }

  const fotoPerfil = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-sm">
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <Image
              src={fotoPerfil}
              roundedCircle
              fluid
              thumbnail
              style={{ width: "150px", height: "150px" }}
            />
          </Col>

          <Col md={8}>
            <h3>{user.name}</h3>
            <p className="text-muted">
              <Badge bg={user.rol === "ADMINISTRATIVO" ? "danger" : "success"}>
                {user.rol}
              </Badge>
            </p>
            <hr />
            <p>
              <strong>Email de Registro:</strong> {user.username}
            </p>
            <p>
              <strong>Email de Recuperación:</strong> ************@recovery.com
            </p>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default MiPerfil;
