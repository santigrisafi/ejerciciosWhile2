let ej3 = () => {
  let nums = [];
  let suma = 0.0;
  let option = "";
  let numInput = 0;
  while (option != "cancelar") {
    option = prompt("Ingrese una opcion");
    if (option != "cancelar") {
      numInput = parseInt(prompt("Ingrese un numero"));
      if (Number(numInput)) {
        nums.push(numInput);
      } else {
        alert(
          "Lo que ingreso no es un numero, es una caracter o letra, vuelvalo a intentar nuevamente"
        );
      }
    }
  }
  nums.forEach((number) => {
    suma += number;
  });
  document.write(`Suma total de los numeros es de ${suma}`);
};
