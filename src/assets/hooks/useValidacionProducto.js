import { useState } from 'react';

function useValidacionFormulario(campos, tipoFormulario) {
  const [tocado, setTocado] = useState({});

  const marcarTocado = (campo) => {
    setTocado({ ...tocado, [campo]: true });
  };

  const soloLetras = (texto) => /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(texto.trim());
  const tieneLongitud = (texto, min) => typeof texto === 'string' && texto.trim().length >= min;


  const esValido = {};

  const validarUsuario = () => ({
    username: tieneLongitud(campos.username, 3) && soloLetras(campos.username),
    password: tieneLongitud(campos.password, 3),
  });

  const esNumeroValido = (valor) => !isNaN(valor) && Number(valor) >= 0;

  const validarProducto = () => ({
    title: tieneLongitud(campos.title, 3) && soloLetras(campos.title),
    price: esNumeroValido(campos.price, 1),
    description: tieneLongitud(campos.description, 5) && soloLetras(campos.description),
    category: campos.category !== "",
    rate: esNumeroValido(campos.rating.rate, 1),
    count: esNumeroValido(campos.rating.count, 1),
  });

  let validaciones = {};
  if (tipoFormulario === 'usuario') {
    validaciones = validarUsuario();
  }
  if (tipoFormulario === 'producto') {
    validaciones = validarProducto();
  }


  return {
    esValido: validaciones,
    tocado,
    marcarTocado,
  };
}

export default useValidacionFormulario;