// Solicitar un número al usuario
let numero = prompt("Ingresa un número:");

// Convertir a entero
numero = parseInt(numero);

// Comprobar si es par o impar
if (numero % 2 === 0) {
  console.log("El número " + numero + " es par.");
} else {
  console.log("El número " + numero + " es impar.");
}
