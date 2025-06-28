import { createContext, useState, useEffect } from "react";

export const SuscripcionesContext = createContext();

export const SuscripcionesProvider = ({ children }) => {
  const suscripcionesIniciales =
    JSON.parse(localStorage.getItem("suscripciones")) || [];
  const [suscripciones, setSuscripciones] = useState(suscripcionesIniciales);

  useEffect(() => {
    localStorage.setItem("suscripciones", JSON.stringify(suscripciones));
  }, [suscripciones]);

  const esEmailValido = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const agregarSuscripcion = (email) => {
    const emailLimpio = email.trim();

    if (!emailLimpio) {
      alert("Por favor, ingresa un correo electrónico.");
      return false;
    }

    if (!esEmailValido(emailLimpio)) {
      alert(
        "Por favor, ingresa un formato de correo electrónico válido (ej: nombre@dominio.com)."
      );
      return false;
    }

    if (suscripciones.includes(emailLimpio)) {
      alert("Este correo ya está suscrito. ¡Gracias!");
      return false;
    }

    setSuscripciones((prevSuscripciones) => [
      ...prevSuscripciones,
      emailLimpio,
    ]);
    alert("¡Gracias por suscribirte!");
    return true;
  };

  const value = {
    suscripciones,
    agregarSuscripcion,
  };

  return (
    <SuscripcionesContext.Provider value={value}>
      {children}
    </SuscripcionesContext.Provider>
  );
};
