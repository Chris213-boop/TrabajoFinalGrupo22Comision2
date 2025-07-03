import { useState } from "react";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useProductos } from "../hooks/useProductos";
import useValidacionFormulario from "../hooks/useValidacionProducto";

function FormularioProducto() {
    const { agregarProducto } = useProductos();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [rate, setRate] = useState(0);
    const [count, setCount] = useState(0);
    const [image, setImage] = useState(null); // imagen como archivo
    const [preview, setPreview] = useState(null); // URL para previsualización
    const [mensajeError, setMensajeError] = useState(''); // para controlar que se llenen los campos
    const navigate = useNavigate();

    const campos = {
        title,
        price,
        description,
        category,
        rating: {
            rate, //descuento
            count,//contador
        },
    };

    const { esValido, tocado, marcarTocado } = useValidacionFormulario(campos, 'producto');

    const manejarEnvio = (e) => {
        e.preventDefault();

        // Marcar todos como tocados para proceder con la validacion
        Object.keys(campos).forEach((campo) => marcarTocado(campo));

        // Validar cada campo
        let formularioValido = true;
        for (let campo in esValido) {
            if (!esValido[campo]) {
                formularioValido = false;
                break;
            }
        }

        // Verifica si hay imagen
        if (!formularioValido || !image) {
            setMensajeError('⚠️ Faltan completar algunos campos correctamente.');
            return;
        }

        setMensajeError('');

        agregarProducto({
            title,
            price: parseFloat(price),
            description,
            category,
            rating: {
                rate,
                count,
            },
            image: URL.createObjectURL(image) //convertimos la imagen en una URL temporal para poder mostrarla
        });

        //Para limpiar
        setTitle('');
        setPrice(0);
        setDescription('');
        setCategory('');
        setRate(0);
        setCount(0);
        setImage(null);
        setPreview(null);

        navigate('/productos');
    };

    // Manejador para seleccionar imagen
    const manejarImagen = (e) => {
        const archivo = e.target.files[0]; //archivos seleccionados
        if (archivo) {
            setImage(archivo); // guardamos el archivo
            setPreview(URL.createObjectURL(archivo)); // mostramos la imagen
        }
    };

    return (
        <Container className="mt-4">
            <h4>Agregar Producto</h4>
            <Form onSubmit={manejarEnvio} noValidate>
                <Form.Group controlId="formTitle">
                    <Form.Label> Nombre del producto: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="camisa"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onBlur={() => marcarTocado("title")}
                        isValid={tocado.title && esValido.title}
                        isInvalid={tocado.title && !esValido.title}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Debe ingresar al menos 3 caracteres.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label> Precio del producto: </Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="$50"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        onBlur={() => marcarTocado("price")}
                        isValid={tocado.price && esValido.price}
                        isInvalid={tocado.price && !esValido.price}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        El precio debe ser un número positivo. No se permiten letras ni valores negativos.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formDescription">
                    <Form.Label> Descripción: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="ej: Mochila Azul con cierre lateral y 3 bolsillos"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        onBlur={() => marcarTocado("description")}
                        isValid={tocado.description && esValido.description}
                        isInvalid={tocado.description && !esValido.description}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        La descripción debe tener al menos 10 caracteres y no pueden ser solo números o símbolos.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formCategory">
                    <Form.Label> Categoría: </Form.Label>
                    <Form.Select
                        aria-label="Seleccione una categoría: "
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        onBlur={() => marcarTocado("category")}
                        isValid={tocado.category && esValido.category}
                        isInvalid={tocado.category && !esValido.category}
                        required>
                        <option>Selecciona una categoría: </option>
                        <option value="men's clothing">men's clothing</option>
                        <option value="jewelery">jewelery</option>
                        <option value="electronics">electronics</option>
                        <option value="women's clothing">women's clothing</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Debe seleccionar una categoría válida.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formRate">
                    <Form.Label> Descuento: </Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="ej: 80"
                        value={rate}
                        onChange={(e) => setRate(Number(e.target.value))}
                        onBlur={() => marcarTocado("rate")}
                        isValid={tocado.rate && esValido.rate}
                        isInvalid={tocado.rate && !esValido.rate}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        El descuento debe ser un número entre 0 y 100. No se permiten valores negativos ni mayores a 100.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formCount">
                    <Form.Label> Cantidad: </Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="ej: 80"
                        value={count}
                        onChange={(e) => setCount(Number(e.target.value))}
                        onBlur={() => marcarTocado("count")}
                        isValid={tocado.count && esValido.count}
                        isInvalid={tocado.count && !esValido.count}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        La cantidad debe ser un número entero positivo.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formImage" className="mt-3">
                    <Form.Label>Imagen del producto</Form.Label>
                    <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={manejarImagen}
                    />
                </Form.Group>

                {preview && (
                    <Container className="mt-3">
                        <img
                            src={preview}
                            alt="Previsualización"
                            className="imagen-preview"
                        />
                    </Container>
                )}
                {mensajeError && (
                    <Alert variant="warning" className="mt-2">{mensajeError}</Alert>
                )}
                <Button className="mt-3" variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
        </Container>
    )
}
export default FormularioProducto;
