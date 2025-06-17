import { createContext, useState, useMemo, useCallback, useEffect } from "react";

// Crear el contexto
export const ProductosContext = createContext(null);

//Componente proveedor del contexto de Productos
export function ProductosProvider({ children }) {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => { //aqui definimos una funcion asincrona llamada fetchProductos
            try {
                setIsLoading(true);
                setError(null);

                const response = await fetch('https://fakestoreapi.com/products'); //response= promesa,http:... es la petición 
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();

                //Estado "activo" y favorito "false" por defecto en la lista para que sea funcional
                const productosConCampos = data.map(producto => ({
                    ...producto,
                    estado: 'activo',
                    favorito: false
                }));

                setProductos(productosConCampos);

            } catch (err) {
                console.error("Error al cargar productos de la API: ", err);
                setError("No se pudieron cargar los Productos. Intentelo de nuevo más tarde.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchProductos(); // Aqui hacemos el llamado a la funcion 
    }, []);
    //Aqui van las funciones que modifican la lista de Productos: eliminar, agregar, ver favoritos, modificar, etc.

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

    //////////////////////
    const buscarProducto = useCallback((valorBusqueda) => {
        const busquedaNormalizada = valorBusqueda.toLowerCase().trim();

        const encontrados = productos.filter(p =>
            String(p.id).toLowerCase().includes(busquedaNormalizada) ||
            (p.title && p.title.toLowerCase().includes(busquedaNormalizada)) ||
            (p.category && p.category.toLowerCase().includes(busquedaNormalizada))
        );

        if (encontrados.length === 0) {
            return { producto: [], estado: 'no-encontrado' };
        }

        const activos = encontrados.filter(p =>
            p.estado === 'activo' || p.estado === true
        );

        if (activos.length === 0) {
            return { producto: [], estado: 'inactivo' };
        }

        return { producto: activos, estado: 'activo' };
    }, [productos]);
    ///////////////////////////


    const modificarProducto = useCallback((productoModificado) => {
        setProductos(prevProductos =>
            prevProductos.map(producto =>
                producto.id === productoModificado.id
                    ? { ...producto, ...productoModificado }
                    : producto
            )
        );
    }, []);

    const contextValue = useMemo(() => ({ //aqui van todos los recursos que se les va a pasar a los children
        productos,
        setProductos,
        isLoading,
        error,
        eliminarProducto,
        favoritoProducto,
        buscarProducto,
        modificarProducto
    }), [productos, isLoading, error, eliminarProducto, favoritoProducto, buscarProducto, modificarProducto]);

    return (
        //ProductosContext.Provider : es un componente funcional, mientras que contextValue es un prop que se le pasa a los hijos de ese componente funcional.
        <ProductosContext.Provider value={contextValue}>
            {children}
        </ProductosContext.Provider>
    );
}

