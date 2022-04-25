let getString = () => {
  return prompt("Ingresar cadena de texto");
};

let ej2 = () => {
  let strings = [];
  let option = "";
  while (option != "cancelar") {
    option = prompt(
      "Ingrese cancelar para detener la ejecuccion del ejercicio"
    );
    if (option.toLowerCase() != "cancelar") {
      strings.push(getString());
    }
  }
  strings.forEach((string) => {
    return !string.length - 1
      ? document.write(string + " - ")
      : document.write(string + " ");
  });
};
