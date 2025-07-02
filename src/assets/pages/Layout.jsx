import { Outlet, Link } from "react-router-dom";
import { Container, NavDropdown, Nav, Navbar, Row, Col, Button, Image, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAut from "../hooks/useAut";
import { useState } from "react";
import { useSuscripciones } from "../hooks/useSuscripciones";

function Layout() {
  const { user, isAuthenticated, logout } = useAut();
  const navigate = useNavigate();
  const { agregarSuscripcion } = useSuscripciones();
  const [email, setEmail] = useState("");

  const manejarLogout = () => {
    logout();
    navigate("/");
  };
  const handleSuscripcion = (e) => {
    e.preventDefault();
    const exito = agregarSuscripcion(email);
    if (exito) {
      setEmail("");
    }
  };

  return (
    <>
      <Navbar expand="lg" className="navbar mb-3">
        <Container fluid className="fw-bold">
          <Navbar.Brand>Principal</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/productos">
                Productos
              </Nav.Link>
              <Nav.Link as={Link} to="/nosotros">
                Nosotros
              </Nav.Link>
              <Nav.Link as={Link} to="/buscar">
                Buscar
              </Nav.Link>

              {/* </Nav> */}
              {isAuthenticated && user?.rol === "ADMINISTRATIVO" && (
                <NavDropdown
                  title="Administrar Productos"
                  id="admin-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/agregar">
                    Agregar Producto
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/eliminados">
                    Productos Eliminados
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/admin/suscripciones">
                    Ver Suscripciones
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/prodFav">
                    Favoritos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/perfil">
                    Mi Perfil
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {isAuthenticated && user?.rol === "CLIENTE" && (
                <NavDropdown title="Mi Cuenta" id="cliente-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/favoritos">
                    Favoritos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/perfil">
                    Mi Perfil
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
            <Nav className="d-flex align-items-center gap-2">
              {isAuthenticated ? (
                <>
                  <Navbar.Text className="me-2">
                    👤 {user?.username || "Usuario"}
                  </Navbar.Text>
                  <Button variant="outline-success" onClick={manejarLogout}>
                    Cerrar Sesión
                  </Button>
                </>
              ) : (
                <Nav.Link href="/">Iniciar Sesión</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>

      <Card.Footer className="text-muted p-4 mt-5">
        <Row className="text-center mb-4">
          <Col md={4}>
            <h6>🚚 ENVÍOS A TODO EL PAÍS</h6>
            <p>Gratis desde $100.000</p>
          </Col>
          <Col md={4}>
            <h6>💳 CUOTAS SIN INTERÉS</h6>
            <p>3 y 6 cuotas sin interés en compras mayores a $100.000</p>
          </Col>
          <Col md={4}>
            <h6>💬 ATENCIÓN PERSONALIZADA</h6>
            <p>Escribinos al WhatsApp: +54 342-5930997</p>
          </Col>
        </Row>
        <Row className="text-center mb-4">
          <Col md={4}>
            <h6>MEDIOS DE PAGO</h6>
            <p>Visa, MasterCard, Mercado Pago, etc.</p>
          </Col>

          <Col md={4}>
            <h6>CONTACTANOS</h6>
            <p>📞 +54 342-5930997</p>
            <p>📧 contacto@stylescript.com</p>
            <p>📍 San Salvador de Jujuy 2111</p>
          </Col>

          <Col md={4}>
            <h6>REDES SOCIALES</h6>
            <Row>
              <Col xs={6} md={4}>
                <a href="#" target="_blank">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    alt="Instagram"
                    width="32"
                  />
                </a>
              </Col>

              <Col xs={6} md={4}>
                <a href="#" target="_blank">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                    alt="Facebook"
                    width="32"
                  />
                </a>
              </Col>
              <Col xs={6} md={4}>
                <a href="#" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
                    alt="TikTok"
                    width="32"
                  />
                </a>
              </Col>
            </Row>
            <h6 className="mt-3">SUSCRÍBETE!!!</h6>
            <input
              type="email"
              placeholder="Tu email"
              className="form-control mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="link" onClick={handleSuscripcion}>
              Suscribirme
            </Button>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p> © StyleScript -G22- 2025. Todos los derechos reservados.</p>
            <p>Hecho con 💻 y 💎 para que brilles más.</p>
          </Col>
        </Row>
      </Card.Footer>
    </>
  );
}
export default Layout;
