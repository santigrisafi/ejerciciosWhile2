let getCalificacion = () => {
  return parseInt(prompt("Ingresar nota"));
};

let testScore = () => {
  let note = Number(getCalificacion());
  if (isNaN(note)){
    alert("No es un número lo que ingreso");
    return;
  }
  return note > 0 && note < 3
    ? alert("Muy deficiente")
    : note >= 3 && note < 5
    ? alert("Insuficiente")
    : note >= 5 && note < 6
    ? alert("Suficiente")
    : note >= 6 && note < 7
    ? alert("Bien")
    : note >= 7 && note < 9
    ? alert("Notable")
    : note >= 9 && note <= 10
    ? alert("Sobresaliente")
    : alert("No corresponde a una calificacion válida");
};
