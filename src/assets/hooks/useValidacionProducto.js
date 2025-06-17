import { useState } from 'react';

function useValidacionProducto(campos) {
  const [tocado, setTocado] = useState({});

  const marcarTocado = (campo) => {
    setTocado({ ...tocado, [campo]: true });
  };

  const soloLetras = (texto) => /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(texto.trim());
  const tieneLongitud = (texto, min) => texto.trim().length >= min;


  const esValido = {
    username: tieneLongitud(campos.username, 3) && soloLetras(campos.username),
    password: tieneLongitud(campos.password, 3),
  };

  return {
    esValido,
    tocado,
    marcarTocado
  };
}

export default useValidacionProducto;