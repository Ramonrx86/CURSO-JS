// Solicita al usuario un texto
let cadena = prompt("Introduce un texto:");

// Contadores para cada vocal
let conteoA = 0;  
let conteoE = 0;  
let conteoI = 0;  
let conteoO = 0;  
let conteoU = 0;  

// Convierte el texto a minúsculas
cadena = cadena.toLowerCase();

// Recorre el texto y cuenta cada vocal
for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena.charAt(i);
    switch (caracter) {
        case 'a':
            conteoA++;
            break;
        case 'e':
            conteoE++;
            break;
        case 'i':
            conteoI++;
            break;
        case 'o':
            conteoO++;
            break;
        case 'u':
            conteoU++;
            break;
    }
}

// Muestra los resultados en consola
console.log(`Vocal 'a': ${conteoA}`);
console.log(`Vocal 'e': ${conteoE}`);
console.log(`Vocal 'i': ${conteoI}`);
console.log(`Vocal 'o': ${conteoO}`);
console.log(`Vocal 'u': ${conteoU}`);

console.log(`Número de veces que aparece la vocal 'a': ${conteoA}`);
console.log(`Número de veces que aparece la vocal 'e': ${conteoE}`);
console.log(`Número de veces que aparece la vocal 'i': ${conteoI}`);
console.log(`Número de veces que aparece la vocal 'o': ${conteoO}`);
console.log(`Número de veces que aparece la vocal 'u': ${conteoU}`);