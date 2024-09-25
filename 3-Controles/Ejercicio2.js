// Solicita al usuario un texto
let cadena = prompt("Introduce una contraseña:");

// Contadores para cada vocal
let conteo = 0;  

// Convierte el texto a minúsculas
cadena = cadena.toLowerCase();

// Recorre el texto y cuenta cada vocal
for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena.charAt(i);
    switch (caracter) {
        case ' ':
            conteo++;
            break;
        case '1':
            conteo++;
            break;
        case '2':
            conteo++;
            break;
        case '3':
            conteo++;
            break;
        case '4':
            conteo++;
            break;
        case '5':
            conteo++;
            break;    
        case '6':
            conteo++;
            break;
        case '7':
            conteo++;
            break;
        case '8':
            conteo++;
            break;
        case '9':
            conteo++;
            break;
        case '0':
            conteo++;
            break;
        case '?':
            conteo++;
            break;   
        case '¿':
            conteo++;
            break;   
        case '¡':
            conteo++;
            break; 
        case '!':
            conteo++;
            break; 
        case '"':
            conteo++;
            break; 
        case '·':
            conteo++;
            break; 
        case '$':
            conteo++;
            break; 
        case '%':
            conteo++;
            break; 
        case '&':
            conteo++;
            break; 
        case '/':
            conteo++;
            break; 
        case '(':
            conteo++;
            break; 
        case ')':
            conteo++;
            break; 
        case '=':
            conteo++;
            break; 
        case 'q':
            conteo++;
            break; 
        case 'w':
            conteo++;
            break; 
        case 'e':
            conteo++;
            break; 
        case 'r':
            conteo++;
            break; 
        case 't':
            conteo++;
            break; 
        case 'y':
            conteo++;
            break; 
        case 'u':
            conteo++;
            break; 
        case 'i':
            conteo++;
            break; 
        case 'o':
            conteo++;
            break; 
        case 'p':
            conteo++;
            break; 
        case '`':
            conteo++;
            break; 
        case '^':
            conteo++;
            break; 
        case '+':
            conteo++;
            break; 
        case '*':
            conteo++;
            break; 
        case 'a':
            conteo++;
            break; 
        case 's':
            conteo++;
            break; 
        case 'd':
            conteo++;
            break; 
        case 'f':
            conteo++;
            break; 
        case 'g':
            conteo++;
            break; 
        case 'h':
            conteo++;
            break; 
        case 'j':
            conteo++;
            break; 
        case 'k':
            conteo++;
            break; 
        case 'l':
            conteo++;
            break; 
        case 'ñ':
            conteo++;
            break;  
        case 'ç':
            conteo++;
            break; 
        case '¨':
            conteo++;
            break; 
        case 'Ç':
            conteo++;
            break; 
        case '<':
            conteo++;
            break; 
        case '>':
            conteo++;
            break; 
        case 'z':
            conteo++;
            break; 
        case 'x':
            conteo++;
            break; 
        case 'c':
            conteo++;
            break; 
        case 'v':
            conteo++;
            break; 
        case 'b':
            conteo++;
            break; 
        case 'n':
            conteo++;
            break; 
        case 'm':
            conteo++;
            break; 
        case ',':
            conteo++;
            break; 
        case ';':
            conteo++;
            break; 
        case '.':
            conteo++;
            break; 
        case ':':
            conteo++;
            break; 
        case '-':
            conteo++;
            break; 
        case '_':
            conteo++;
            break; 
    }
}


// Muestra los resultados en consola
console.log(`Texto: ${cadena}`);

switch (character) {
    
    case (conteo < 8):
        alert(`longitud no valida`);
        break;
    case ' ':
        alert(`no es valido`);
        break;  
    

    default:
        break;
}


