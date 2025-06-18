import { useState } from "react";
import {Form, Button, Container} from 'react-bootstrap';
import { useProductos } from "../hooks/useProductos";

function FormularioProducto() {
    const {agregarProducto} = useProductos();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [rate, setRate] = useState(0);
    const [count, setCount] = useState(0);
    const [image, setImage] = useState(null); // imagen como archivo
    const [preview, setPreview] = useState(null); // URL para previsualización

    const manejarEnvio = (e) => {
        e.preventDefault();

        if (title.trim() === '' || price.trim() === '' || !image) return ;//validaciones

        agregarProducto ({
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
        setPrice('');
        setDescription('');
        setCategory('');
        setRate(0);
        setCount(0);
        setImage(null);
        setPreview(null);
    };

    // Manejador para seleccionar imagen
    const manejarImagen = (e) => {
        const archivo = e.target.files[0];
        if (archivo) {
            setImage(archivo); // guardamos el archivo
            setPreview(URL.createObjectURL(archivo)); // mostramos la imagen
        }
    };

    return (
        <Container className="mt-4">
            <h4>Agregar Producto</h4>
            <Form onSubmit={manejarEnvio}>
                <Form.Group controlId="formTitle">
                    <Form.Label> Nombre del producto: </Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="camisa"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label> Precio del producto: </Form.Label>
                    <Form.Control
                    type="number"
                    placeholder="$50"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formDescription">
                    <Form.Label> Descripción: </Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="ej: Mochila Azul con cierre lateral y 3 bolsillos"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formCategory">
                    <Form.Label> Categoría: </Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="ej: Ropa Masculina "
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formRate">
                    <Form.Label> Descuento: </Form.Label>
                    <Form.Control
                    type="number"
                    placeholder="ej: 80"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    />
                </Form.Group>
                <Form.Group controlId="formCount">
                    <Form.Label> Cantidad: </Form.Label>
                    <Form.Control
                    type="number"
                    placeholder="ej: 80"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                    />
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
                <Button className="mt-3" variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
        </Container>
    )
}
export default FormularioProducto;
