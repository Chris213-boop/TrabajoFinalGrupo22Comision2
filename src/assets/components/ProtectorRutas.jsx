import { Navigate, replace } from "react-router-dom";
import useAut from "../hooks/useAut";
import { Spinner, Container } from "react-bootstrap";

//Componente para proteger rutas basadas en autenticación y roles

const ProtectorRutas = ({rolesPermitidos, children}) => {
    const { isAutenticated, user, isLoading } = useAut();

    //Mostrar un spinner mientras se carga el estado de autenticacion
    if (isLoading) {
        return(
            <Container className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">
                        Cargando autenticación...
                    </span>
                </Spinner>
                <p className="mt-2" >Verificando sesión...</p>
            </Container>
        );
    }

    //Si no esta autenticado, redirigir al login
    if (isAutenticated) {
        return <Navigate to="/login" replace />;
    }

    //Si esta autenticado, verificar el rol (si se especifican roles permitidos)
    if (rolesPermitidos && !rolesPermitidos.includes(user?.rol)) {
        return <Navigate to="/unauthorized" replace />;
    }

    //Si esta autenticado y autorizado por rol, renderizar el componente hijo
    return children;
};

export default ProtectorRutas;
