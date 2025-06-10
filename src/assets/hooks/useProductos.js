// Hook personalizado
import { useContext } from "react";
import { ProductosContext } from "../contexts/ProductosContext";

export function useProductos() {
    const context = useContext (ProductosContext); // Aqui hacemos el llamado al contexto que creamos

    if (context === null) {
        throw new Error('useProductos debe ser usado dentro de ProductosProvider'); // este error se muestra cuando intentamos ocupar el contexto fuera del provider
    }

    return context;
}