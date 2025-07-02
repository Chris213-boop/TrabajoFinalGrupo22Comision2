import { useState } from "react";

function useValidacionFormulario(campos, tipoFormulario) {
  const [tocado, setTocado] = useState({});

  const marcarTocado = (campo) => {
    setTocado({ ...tocado, [campo]: true });
  };

  const soloLetras = (texto) => /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(texto.trim());
  const tieneLongitud = (texto, min) =>
    typeof texto === "string" && texto.trim().length >= min;

  const esValido = {};
  const esEmailValido = (email) => {
    if (!email) return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const esUsernameValido = (username) => {
    const textoLimpio = username?.trim() || "";
    return (
      (esEmailValido(textoLimpio) || soloLetras(textoLimpio)) &&
      tieneLongitud(textoLimpio, 3)
    );
  };

  const validarUsuario = () => ({
    username: esUsernameValido(campos.username),
    password: tieneLongitud(campos.password, 3),
  });

  const esNumeroValido = (valor) => !isNaN(valor) && Number(valor) > 0;

  const validarProducto = () => ({
    title: tieneLongitud(campos.title, 3),
    price: esNumeroValido(campos.price, 1),
    description:
      tieneLongitud(campos.description, 10) &&
      /[A-Za-zÁÉÍÓÚáéíóúñÑ]/.test(campos.description),
    category: campos.category !== "",
    rate: Number(campos.rating.rate) >= 0 && Number(campos.rating.rate) <= 100,
    count: esNumeroValido(campos.rating.count, 1),
  });

  let validaciones = {};
  if (tipoFormulario === "usuario") {
    validaciones = validarUsuario();
  }
  if (tipoFormulario === "producto") {
    validaciones = validarProducto();
  }

  return {
    esValido: validaciones,
    tocado,
    marcarTocado,
  };
}

export default useValidacionFormulario;
