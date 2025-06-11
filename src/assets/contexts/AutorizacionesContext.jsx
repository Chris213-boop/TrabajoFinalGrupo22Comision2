import { createContext, useState,useMemo, useCallback } from "react";

import usersData from "../data/usuarios.json";

export const AutContext = createContext(null);

export function AutProvider ({children}) {
    const [user, setUser] = useState(null); //usuario que en primera instancia es null

    //con la intencion de pensar en cargas asincronicas de datos o validaciones
    const [isLoading, setIsLoading] = useState(false);

    // definimos la funcion login
    const login = useCallback((credentials) => {
        setIsLoading(true) ; //se activa brevemente, luego se desactiva
        try {
            const usuarioEncontrado = usersData.find(
                u => u.username === credentials.username && u.password === credentials.password
            );

            if (usuarioEncontrado) {
                const {password, ...userWithoutPassword } = usuarioEncontrado; // Quitamos el password
                setUser (userWithoutPassword);
                setIsLoading (false); //desactivar carga aqui
                return {success: true }; // retorna exito inmediatamente
            } else {
                setUser(null);
                setIsLoading (false);
                return { success: false, message: "Credenciales inválidas. Por favor, verifica tu usuario y contraseña "}
            }
        } catch (error ) {
            console.error("Login failes due to unexpected error: ", error.message);
            setUser(null);
            setIsLoading(false);
            return {success: false, message: "Ocurrio un error inesperado durante el login"}
        }
    }, []);
    const logout = useCallback(() => {
        setUser(null);
    }, []);
    const autContextValue = useMemo (() => ({
        user,
        isAuthenticated : !!user,
        isLoading,
        login,
        logout,
}), [user, isLoading, login, logout]);
    //Proveer el valor del contexto a los hijos
    return (
        <AutContext.Provider value = {autContextValue}>
            {children}
        </AutContext.Provider>
    );
}