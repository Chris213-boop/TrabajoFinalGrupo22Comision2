// Archivo: src/assets/contexts/AutorizacionesContext.jsx (Versión Final con LocalStorage)

import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import usersData from "../data/usuarios.json";

export const AutContext = createContext(null);

export function AutProvider({ children }) {
  const initialUser = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(initialUser);
  const [isLoading, setIsLoading] = useState(false); // Cambiaremos esto en un momento

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = useCallback((credentials) => {
    setIsLoading(true);
    try {
      const usuarioEncontrado = usersData.find(
        (u) =>
          u.username === credentials.username &&
          u.password === credentials.password
      );

      if (usuarioEncontrado) {
        const { password, ...userWithoutPassword } = usuarioEncontrado;
        setUser(userWithoutPassword);
        setIsLoading(false);
        return { success: true };
      } else {
        setUser(null);
        setIsLoading(false);
        return { success: false, message: "Credenciales inválidas..." };
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      setUser(null);
      setIsLoading(false);
      return { success: false, message: "Ocurrió un error inesperado..." };
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const autContextValue = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      logout,
    }),
    [user, isLoading, login, logout]
  );

  return (
    <AutContext.Provider value={autContextValue}>
      {children}
    </AutContext.Provider>
  );
}
