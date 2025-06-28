import { createContext, useState, useMemo, useCallback, useEffect } from "react";
import usersData from "../data/usuarios.json";

export const AutContext = createContext(null);

export function AutProvider({ children }) {

    const initialUser = JSON.parse(localStorage.getItem("user"));
    // Estado inicial del usuario logueado
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    // Estado de todos los usuarios
    const [usuarios, setUsuarios] = useState(() => {
        const storedUsuarios = localStorage.getItem("usuarios");
        return storedUsuarios ? JSON.parse(storedUsuarios) : usersData;
    });

    //con la intencion de pensar en cargas asincronicas de datos o validaciones
    const [isLoading, setIsLoading] = useState(false);

    // Guardar usuario actual en localStorage
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    // Guardar lista de usuarios en localStorage
    useEffect(() => {
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }, [usuarios]);

    // definimos la funcion login
    const login = useCallback((credentials) => {
        setIsLoading(true); //se activa brevemente, luego se desactiva
        try {
            const usuarioEncontrado = usuarios.find(
                u => u.username === credentials.username && u.password === credentials.password
            );

            if (usuarioEncontrado) {
                const { password, ...userWithoutPassword } = usuarioEncontrado; // Quitamos el password
                setUser(userWithoutPassword);
                setIsLoading(false); //desactivar carga aqui
                return { success: true }; // retorna exito inmediatamente
            } else {
                setUser(null);
                setIsLoading(false);
                return { success: false, message: "Credenciales inválidas. Por favor, verifica tu usuario y contraseña " }
            }
        } catch (error) {
            console.error("Login failes due to unexpected error: ", error.message);
            setUser(null);
            setIsLoading(false);
            return { success: false, message: "Ocurrio un error inesperado durante el login" }
        }
    }, [usuarios]);

    const logout = useCallback(() => {
        setUser(null);
    }, []);

    // Función para registrar un nuevo usuario
    const registrarUsuario = useCallback((nuevoUsuario) => {
        console.log("Registrando:", nuevoUsuario);
        const existe = usuarios.find((u) => u.username === nuevoUsuario.username);
        if (existe) {
            return { success: false, message: "El nombre de usuario ya está en uso" };
        }

        const nuevo = {
            id: `id${usuarios.length + 1}`,
            name: nuevoUsuario.name || nuevoUsuario.username,
            ...nuevoUsuario
        };

        const actualizados = [...usuarios, nuevo];
        setUsuarios(actualizados);//
        console.log("Usuarios actualizados:", actualizados);
        return { success: true };
    }, [usuarios]);

    const autContextValue = useMemo(() => ({
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        registrarUsuario,
    }), [user, isLoading, login, logout, registrarUsuario]);
    //Proveer el valor del contexto a los hijos
    return (
        <AutContext.Provider value={autContextValue}>
            {children}
        </AutContext.Provider>
    );
}