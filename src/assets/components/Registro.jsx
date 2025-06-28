import { useState} from "react";
import { Form, Button, Container, Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAut from "../hooks/useAut";
import useValidacionFormulario from "../hooks/useValidacionProducto";

function Registro() {
    const { registrarUsuario } = useAut();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Completa todos los campos");
            return;
        }

        const nuevoUsuario = { username, password, rol: "CLIENTE" };
        const resultado = registrarUsuario(nuevoUsuario);

        if (resultado.success) {
            alert("Usuario registrado con éxito");
            navigate("/");
        } else {
            alert(resultado.message);
        }
    };

    const campos = {
        username,
        password,
    }

    const { esValido, tocado, marcarTocado } = useValidacionFormulario(campos, 'usuario');

    return (
        <Container>
            <Card className="login-card">
                <Card.Title>Registro</Card.Title>
                <Form onSubmit={handleSubmit} noValidate>
                    <Form.Group className="mb-3">
                        <Form.Label> 👤 Usuario</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre de usuario"
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
                    <Button type="submit" variant="primary" className="w-100">
                        Registrarse
                    </Button>
                    <Button variant="secondary" className="w-100 mt-2"
                        onClick={() => navigate("/")}
                    > Cancelar
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}
export default Registro;