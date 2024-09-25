// Solicitar las tres notas del alumno
let nota1 = parseFloat(prompt("Ingresa la Nota 1 (40%):"));
let nota2 = parseFloat(prompt("Ingresa la Nota 2 (30%):"));
let nota3 = parseFloat(prompt("Ingresa la Nota 3 (30%):"));

// Calcular el promedio ponderado
let promedioPonderado = (nota1 * 0.40) + (nota2 * 0.30) + (nota3 * 0.30);

// Mostrar el promedio
console.log("Promedio Ponderado: " + promedioPonderado.toFixed(2));

// Determinar si el estudiante ha reprobado, va a examen o se exime
if (promedioPonderado < 3.95) {
  console.log("El estudiante ha reprobado la asignatura.");
} else if (promedioPonderado >= 3.95 && promedioPonderado < 4.95) {
  console.log("El estudiante va a examen.");
} else {
  console.log("El estudiante se exime de la asignatura.");
}
