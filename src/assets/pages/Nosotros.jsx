// Informacion personal nuestra

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const integrantesData = [
    {
        nombre: "Torres Pablo Gabriel",
        email: "pablot405@gmail.com",
        ciudad: "Jujuy",
        dni: "42453996",
        lu: "",
        facultad: "Facultad de Ingeniería",
        imagenSrc: "PabloGabriel.jpg",
        altText: "Torres, Pablo"
    },
    {
        nombre: "Torres Cintia Cristina",
        email: "cctorres213@gmail.com",
        ciudad: "Jujuy",
        dni: "46472499",
        lu: "",
        facultad: "Facultad de Ingeniería",
        imagenSrc: "CintiaCristina.jpg",
        altText: "Torres, Cintia"
    },
    {
        nombre: "Pedro Dardo Ramón Cayo",
        email: "P.D.R.C@hotmail.com",
        ciudad: "Jujuy",
        dni: "4481598",
        lu: "",
        facultad: "Otras",
        imagenSrc: "PedroCayo.jpg",
        altText: "Cayo, Pedro"
    },
    {
        nombre: "Ana Lucia Vargas Soraide",
        email: "luciavargasjujuy@gmail.com",
        ciudad: "Jujuy",
        dni: "47439614",
        lu: "",
        facultad: "Escuela de Minas “Dr. Horacio Carrillo”",
        imagenSrc: "AnaLucia.jpg",
        altText: "Vargas Soraide, Ana"
    },
    {
        nombre: "Maximiliano Leandro Cayetano Antenor",
        email: "maxiantenor000@gmail.com",
        ciudad: "Jujuy",
        dni: "43939944",
        lu: "",
        facultad: "Facultad de Ingeniería",
        imagenSrc: "Maximiliano.jpg",
        altText: "Antenor, Maximiliano"
    }
];

function IntegranteCardDisplay({ integrante }) {
    const { nombre, email, ciudad, dni, lu, facultad, imagenSrc, altText } = integrante;

    return (
        <Card className="h-100"> {}
            <Image src={imagenSrc} thumbnail alt={altText} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <ListGroup>
                    <ListGroup.Item as="li">
                        <strong>Dirección de correo:</strong><br />
                        <a href={`mailto:${email}`} className="text-primary text-decoration-none">
                            {email}
                        </a>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <strong>Ciudad: </strong><br />
                        <p>{ciudad}</p>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <strong>DNI: </strong><br />
                        <p>{dni}</p>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">LU: {lu || ''}</ListGroup.Item>
                    <ListGroup.Item as="li">
                        <strong>Nombre de la Facultad/Escuela a la que pertenece: </strong><br />
                        <p>{facultad}</p>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted"></small>
            </Card.Footer>
        </Card>
    );
}

function Nosotros() {
    return (
        <Card className="m-4 p-3 shadow">
            <Card.Body>
                <Card.Title>Nosotros</Card.Title>
                <Card.Text>
                    Somos un equipo de cinco personas apasionadas por la creatividad, la innovación y el trabajo en equipo. Cada uno aporta sus habilidades únicas para dar vida a este proyecto, combinando diseño, programación, contenido y visión estratégica.
                    Juntos, buscamos ofrecer una experiencia de calidad y con propósito.
                </Card.Text>
                <Row xs={1} md={2} lg={3} xl={5} className="g-4"> {}
                    {integrantesData.map((integrante, index) => (
                        <Col key={index} className="mb-3"> {}
                            <IntegranteCardDisplay integrante={integrante} />
                        </Col>
                    ))}
                </Row>
            </Card.Body>
            <Card.Footer className="text-center mt-3">
                <small className="text-muted">
                    Las marcas y logos de Grupo 22 son Propiedad de Programación Visual SRL. Todos los derechos reservados 2025®.
                </small>
            </Card.Footer>
        </Card>
    );
}

export default Nosotros;