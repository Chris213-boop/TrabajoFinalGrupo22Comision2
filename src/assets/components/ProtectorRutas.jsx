import { Navigate } from "react-router-dom";
import useAut from "../hooks/useAut";
import { Spinner, Container } from "react-bootstrap";

const ProtectorRutas = ({ rolesPermitidos, children }) => {
  const { isAuthenticated, user, isLoading } = useAut();

  if (isLoading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando autenticación...</span>
        </Spinner>
        <p className="mt-2">Verificando sesión...</p>
      </Container>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (rolesPermitidos && !rolesPermitidos.includes(user?.rol)) {
    return <Navigate to="/no-autorizado" replace />;
  }

  return children;
};

export default ProtectorRutas;
