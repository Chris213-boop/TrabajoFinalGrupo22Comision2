import { createContext, useState, useMemo, useCallback, useEffect } from "react";

// Crear el contexto
export const ProductosContext = createContext(null);

//Componente proveedor del contexto de Productos
export function ProductosProvider ({children}) {
    const [productos, setProductos] = useState([]); 
    const [isLoading, setIsLoading ] = useState(true);
    const [error, setError ] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => { //aqui definimos una funcion asincrona llamada fetchProductos
            try {
                setIsLoading(true);
                setError(null);

                const response = await fetch ('https://fakestoreapi.com/products'); //response= promesa,http:... es la petición 
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                setProductos (data);
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


    const contextValue = useMemo(() => ({ //aqui van todos los recursos que se les va a pasar a los children
        productos,
        setProductos,
        isLoading,
        error,
        eliminarProducto,
        favoritoProducto,
    }), [productos, isLoading, error, eliminarProducto, favoritoProducto]);

    return (
        //ProductosContext.Provider : es un componente funcional, mientras que contextValue es un prop que se le pasa a los hijos de ese componente funcional.
        <ProductosContext.Provider value={contextValue}>
            {children}
        </ProductosContext.Provider>
    );
}

