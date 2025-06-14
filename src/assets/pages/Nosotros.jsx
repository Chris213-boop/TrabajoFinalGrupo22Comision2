// Informacion personal nuestra

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

// Proximamente optimizaremos este archivo
function Nosotros() {
    return (
        <Card className="m-4 p-3 shadow">
            <Card.Body>
                <Card.Title>Nosotros</Card.Title>
                <Card.Text>
                    Somos un equipo de cinco personas apasionadas por la creatividad, la innovación y el trabajo en equipo. Cada uno aporta sus habilidades únicas para dar vida a este proyecto, combinando diseño, programación, contenido y visión estratégica.
                    Juntos, buscamos ofrecer una experiencia de calidad y con propósito.
                </Card.Text>
                <CardGroup>
                    <Card>
                        <Image src='PabloGabriel.jpg' thumbnail alt='Torres, Pablo'/>
                        <Card.Body>
                            <Card.Title>Torres Pablo Gabriel</Card.Title>
                            <ListGroup>
                                <ListGroup.Item as="li">
                                    <strong>Dirección de correo:</strong><br />
                                    <a href="mailto: pablot405@gmail.com" className="text-primary text-decoration-none">
                                        pablot405@gmail.com
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <strong>Ciudad: </strong><br />
                                    <p>Jujuy</p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <strong>DNI: </strong><br />
                                    <p>42453996</p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">LU: </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <strong>Nombre de la Facultad/Escuela a la que pertenece: </strong><br />
                                    <p>Facultad de Ingeniería </p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Image src='CintiaCristina.jpg' thumbnail alt='Torres, Cintia'/>
                        <Card.Body>
                            <Card.Title>Torres Cintia Cristina</Card.Title>
                            <ListGroup>
                                <ListGroup.Item as="li">
                                    <strong>Dirección de correo:</strong><br />
                                    <a href="mailto: cctorres213@gmail.com" className="text-primary text-decoration-none">
                                        cctorres213@gmail.com
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <strong>Ciudad: </strong><br />
                                    <p>Jujuy</p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <strong>DNI: </strong><br />
                                    <p>46472499</p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">LU: </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <strong>Nombre de la Facultad/Escuela a la que pertenece: </strong><br />
                                    <p>Facultad de Ingeniería </p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Image src='PedroCayo.jpg' thumbnail alt='Cayo, Pedro'/>
                        <Card.Body>
                            <Card.Title>Pedro Dardo Ramón Cayo </Card.Title>
                            <ListGroup>
                                <ListGroup.Item as="li">
                                    <strong>Dirección de correo:</strong><br />
                                    <a href="mailto: P.D.R.C@hotmail.com" className="text-primary text-decoration-none">
                                        P.D.R.C@hotmail.com
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <strong>Ciudad: </strong><br />
                                    <p>Jujuy</p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <strong>DNI: </strong><br />
                                    <p> 4481598 </p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">LU: </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <strong>Nombre de la Facultad/Escuela a la que pertenece: </strong><br />
                                    <p>Otras</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Image src='AnaLucia.jpg' thumbnail alt='Vargas Soraide, Ana'/>
                        <Card.Body>
                            <Card.Title>Ana Lucia Vargas Soraide</Card.Title>
                            <ListGroup>
                                <ListGroup.Item as="li">
                                    <strong>Dirección de correo:</strong><br />
                                    <a href="mailto:luciavargasjujuy@gmail.com" className="text-primary text-decoration-none">
                                        luciavargasjujuy@gmail.com
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <strong>Ciudad: </strong><br />
                                    <p>Jujuy</p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <strong>DNI: </strong><br />
                                    <p>47439614</p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">LU: </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <strong>Nombre de la Facultad/Escuela a la que pertenece: </strong><br />
                                    <p>Escuela de Minas “Dr. Horacio Carrillo”</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Image src='Maximiliano.jpg' thumbnail alt='Antenor, Maximiliano'/>
                        <Card.Body>
                            <Card.Title>Maximiliano Leandro Cayetano Antenor</Card.Title>
                            <ListGroup>
                                <ListGroup.Item as="li">
                                    <strong>Dirección de correo:</strong><br />
                                    <a href="mailto: maxiantenor000@gmail.com" className="text-primary text-decoration-none">
                                        maxiantenor000@gmail.com
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <strong>Ciudad: </strong><br />
                                    <p>Jujuy</p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <strong>DNI: </strong><br />
                                    <p> 43939944 </p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">LU: </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <strong>Nombre de la Facultad/Escuela a la que pertenece: </strong><br />
                                    <p>Facultad de Ingeniería </p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
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

