// Pagina de error
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();
    
    const volverAlInicio = () => {
    navigate('/');
  };

  return (
    <Container className="text-center mt-5 mb-5 p-4">
      <Row>
        <Col>
          <h1 className="display-1 text-danger">ERROR 404</h1>
          <p className="fs-4 text-danger">Página no encontrada</p>
          <p className="fs-4 text-danger">La página que estás buscando no existe o ha sido movida.</p>
          <Button variant="success" onClick={volverAlInicio}>
            Volver al inicio
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Error;