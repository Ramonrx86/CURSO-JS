let a = 500; // Valor inicial A
let b = 456; // Valor inicial B
let suma1 = 0; // Variable para almacenar la sumatoria de A
let suma2 = 0; // Variable para almacenar la sumatoria de B

// Bucle que se ejecuta hasta que A llegue a 800
while (a < 800) {
    suma1 += a; // Sumar A
    a += 10; // Incrementar A en +10

    suma2 += b; // Sumar B
    b -= 2; // Decrementar B en -2
}

// Sumar ambas sumas para obtener el total
let sumat = suma1 + suma2;

// Imprimir el resultado de la sumatoria
console.log("La sumatoria total es: " + sumat);
