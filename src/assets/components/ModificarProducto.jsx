import { Modal, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function ModificarProducto({ producto, onGuardar, onCerrar }) {
    const [form, setForm] = useState({
        title: '',
        price: '',
        category: '',
        description: ''
    });

    useEffect(() => {
        if (producto) {
            setForm({
                title: producto.title,
                price: producto.price,
                category: producto.category,
                description: producto.description
            });
        }
    }, [producto]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        onGuardar({
            ...producto,
            ...form,
            price: parseFloat(form.price)
        });
        onCerrar(); // cerrado del modal luego de guardar
    };

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
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Categoría</Form.Label>
                        <Form.Control
                            type="text"
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            rows={3}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCerrar}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Guardar Cambios
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModificarProducto;