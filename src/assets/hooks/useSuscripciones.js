import { useContext } from "react";
import { SuscripcionesContext } from "../contexts/SuscripcionesContext";

export const useSuscripciones = () => {
  const context = useContext(SuscripcionesContext);
  if (!context) {
    throw new Error(
      "useSuscripciones debe ser usado dentro de un SuscripcionesProvider"
    );
  }
  return context;
};
