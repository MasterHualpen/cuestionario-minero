function obtenerPreguntas() {
  const alternativas = [["Alternativa", "¿A CUÁNTO SE PUEDE ESTACIONAR AL LADO IZQUIERDO DEL TOW HAUL O KOMATSU 830?", "A 7 MTS", "A 10 MTS", "30 MTS CON PÉRTIGA Y BALIZA A LA ALTURA DE LA CABINA DEL OPERADOR", "A 8 MTS", "A"],
  ["Alternativa", "¿A CUÁNTO SE PUEDE ESTACIONAR  A LA DERECHA DE UN CAEX?", "A 8 MTS", "30 MTS CON PÉRTIGA Y BALIZA A LA ALTURA DE LA CABINA DEL OPERADOR", "A 10 MTS", "A 7 MTS", "B"],
  ...
  ];

  const vf = [["vf", "¿LOS EQUIPOS MÓVILES DE SUPERFICIE SON AQUELLOS QUE TIENEN UNA MASA BRUTA DE 3.500 KG?", "VERDADERO", "FALSO", null, null, "FALSO"],
  ["vf", "¿SE PUEDE ADELANTAR A UN EQUIPO EN UNA RAMPA CON PRETIL AL MEDIO?", "VERDADERO", "FALSO", null, null, "VERDADERO"],
  ...
  ];

  function aleatorio(array, cantidad) {
    return array.sort(() => 0.5 - Math.random()).slice(0, cantidad);
  }

  return {
    alternativas: aleatorio(alternativas, 7),
    vf: aleatorio(vf, 10)
  };
}
