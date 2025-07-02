import { Modal, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import useValidacionFormulario from '../hooks/useValidacionProducto';

function ModificarProducto({ producto, onGuardar, onCerrar }) {
    const [form, setForm] = useState({
        title: '',
        price: '',
        category: '',
        description: '',
        rating: { rate: 0, count: 1 }
    });

    useEffect(() => {
        if (producto) {
            setForm({
                ...producto,
                rating: producto.rating || { rate: 0, count: 1 }
            });
        }
    }, [producto]);

    const { esValido, marcarTocado, tocado } = useValidacionFormulario(form, 'producto');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: name === 'price' ? value : value
        }));
    };

    const handleBlur = (e) => {
        marcarTocado(e.target.name);
    };

    const handleSubmit = () => {
        onGuardar({
            ...producto,
            ...form,
            price: parseFloat(form.price)
        });
        onCerrar(); // cerrado del modal luego de guardar
    };

    const formularioEsValido = Object.values(esValido).every(Boolean);

    return (
        <Modal show onHide={onCerrar}>
            <Modal.Header closeButton>
                <Modal.Title>Modificar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Título</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={tocado.title && !esValido.title}
                        />
                        <Form.Control.Feedback type="invalid">
                            El título debe tener al menos 3 letras y solo letras.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={tocado.price && !esValido.price}
                        />
                        <Form.Control.Feedback type="invalid">
                            El precio debe ser un número mayor a 0.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Categoría</Form.Label>
                        <Form.Control
                            type="text"
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={tocado.category && !esValido.category}
                        />
                        <Form.Control.Feedback type="invalid">
                            La categoría no puede estar vacía.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rows={3}
                            isInvalid={tocado.description && !esValido.description}
                        />
                        <Form.Control.Feedback type="invalid">
                            La descripción debe tener al menos 10 caracteres y contener letras.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCerrar}>
                    Cancelar
                </Button>
                <Button
                    variant="primary"
                    onClick={handleSubmit}
                    disabled={!formularioEsValido}
                >
                    Guardar Cambios
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModificarProducto;