import { Alert, Button, Container, Form, Card } from "react-bootstrap";
import useLogin from "../hooks/useLogin";

function LoginPage() {
    const {username, setUsername, password, setPassword, loginError, Enviar} = useLogin();

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title> Iniciar Sesion</Card.Title>
                    <Form onSubmit={Enviar}>
                        <Form.Group>
                            <Form.Label>Usuario: </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa tu usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña: </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                // onBlur={() => marcarTocado("password")}
                                // isValid={tocado.password && esValido.password}
                                // isInvalid={tocado.password && !esValido.password}
                                required />
                        </Form.Group>
                        {loginError && (
                            <Alert variant="danger">
                                {loginError}
                            </Alert>
                        )}
                        <Button type="submit"> Entrar</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default LoginPage;