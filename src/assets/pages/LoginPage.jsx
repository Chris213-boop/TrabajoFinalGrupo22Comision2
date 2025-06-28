import { Alert, Button, Container, Form, Card} from "react-bootstrap";
import useLogin from "../hooks/useLogin";
import useValidacionFormulario from "../hooks/useValidacionProducto";
import { Link } from "react-router-dom";

function LoginPage() {
    const { username, setUsername, password, setPassword, loginError, Enviar } = useLogin();

    const campos = {
        username,
        password,
    }

    const { esValido, tocado, marcarTocado } = useValidacionFormulario(campos, 'usuario');

    return (
        <Container>
            <Card className="login-card">
                <div className="img-fluid emoji-lock logo">
                    <img src="login.png" alt="contraseña.gif" />{/*🔐*/}
                </div>
                <Card.Body>
                    <Card.Title> Iniciar Sesion</Card.Title>
                    <Form onSubmit={Enviar} noValidate>
                        <Form.Group>
                            <Form.Label> 👤 Usuario </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa tu usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onBlur={() => marcarTocado("username")}
                                isValid={tocado.username && esValido.username}
                                isInvalid={tocado.username && !esValido.username}
                                required />
                            <Form.Control.Feedback type="invalid">
                                Debe ingresar mas de 3 caracteres sin numeros.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>🔒 Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={() => marcarTocado("password")}
                                isValid={tocado.password && esValido.password}
                                isInvalid={tocado.password && !esValido.password}
                                required />
                            <Form.Control.Feedback type="invalid">
                                Debe ingresar mas de 3 caracteres.
                            </Form.Control.Feedback>
                        </Form.Group>
                        {loginError && (
                            <Alert variant="danger">
                                {loginError}
                            </Alert>
                        )}
                        <Button type="submit">🚀 Entrar</Button>
                        <p className="text-center mt-3">
                            ¿No tenés una cuenta? 
                            <Link to="/registro"> Registrarse</Link>
                        </p>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default LoginPage;