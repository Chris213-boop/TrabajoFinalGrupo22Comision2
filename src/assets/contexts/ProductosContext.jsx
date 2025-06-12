import { createContext, useState, useMemo, useCallback } from 'react';

import datosProductos from '../data/Productos.json';

// Creamos el contexto, lo exportamos y le damos el valor null por defecto
export const ProductosContext = createContext(null);

//Componente proveedor del contexto Productos y lo exportamos
export function ProductosProvider({ children }) {
    // Usamos los datos importados del JSON como el estado inicial
    const [productos, setProductos] = useState(
        datosProductos.map(producto => ({
            ...producto,
            estado: producto.estado ? producto.estado.toLowerCase() : 'activo',
            favorito: producto.favorito ?? false,
        }))
    );

    const [favoritos, setFavoritos] = useState([]);

    //Funciones para modificar la lista de productos
    const agregarProducto = useCallback((nuevoProducto) => {
        setProductos((prevProductos) => {
            const nuevoId = String(prevProductos.length > 0 ?
                Math.max(...prevProductos.map(a => Number(a.id))) + 1 : 1);
            return [...prevProductos, { ...nuevoProducto, id: nuevoId, estado: 'activo', favorito: false }];
        });
    }, []);
    // Aqui colocaremos las demas funciones como editar, eliminar(ocultarEstado), mostrar,etc

    const eliminarProducto = useCallback((idProducto) => {
        setProductos((prevProductos) =>
            prevProductos.map((producto) =>
                producto.id === idProducto
                    ? {
                        ...producto,
                        estado: producto.estado === 'activo' ? 'inactivo' : 'activo'
                    }
                    : producto
            )
        );
    }, []);

    const favoritoProducto = useCallback((idProducto) => {
        setProductos(prevProductos =>
            prevProductos.map(producto =>
                producto.id === idProducto
                    ? { ...producto, favorito: !producto.favorito }
                    : producto
            )
        );
    }, []);

    // Memorizamos el valor del contexto para optimizar
    const contextValue = useMemo(() => ({
        productos,
        setProductos,
        agregarProducto,
        eliminarProducto,
        favoritoProducto,
    }), [productos, agregarProducto, eliminarProducto, favoritoProducto]);

    return (
        <ProductosContext.Provider value={contextValue}>
            {children}
        </ProductosContext.Provider>
    );
}