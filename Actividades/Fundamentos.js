

//alert("Hola Mundo! - JS Externo");
console.log("Hola Mundo!")
//console.log("Este es un mensaje que se ve en la consola del navegador")





//CONSTRUCCIÓN DE SENTENCIAS - ESTRUCTURA DEL CÓDIGO

//Contexto 1: Uso del Punto y Coma y Omisión del Punto y Coma
console.log('Hola');
console.log('Mundo');

//Contexto 2: Uso del Punto y Coma y Omisión del Punto y Coma
console.log("Estos son Números:");
[1, 2, 3, 4].forEach(console.log);

console.log("Estos son Números")
[1, 2, 3, 4].forEach(console.log);





//Variables que pueden cambiar con el tiempo
var estatura = 1.71;
let peso = 60;

//Constante que no pueden cambiar
const nombre = "Victor";

//OTROS EJEMPLOS
//Declarando las Variables
var edad;
let ciudad;

//Inicializando las Variables
edad = 29;
ciudad = "Osorno";

//Declaración e Inicialización de una Variable
const apellido = "Saldivia";

//Concatenando Variables de tipo String
const nombrecompleto = nombre + " " + apellido;
console.log(nombrecompleto);

//Declarando e Inicializando Variables en una Línea
let docente = 'Tomas', age = 25, asignaturas = ['IA', 'Seguridad Informática'];

//Entendiendo el concepto de Hoisting (Sólo con VAR)
console.log(n);
var n = 10;





//NUMBERS
let edad = 29;
let sueldo = 1200000;
const PI = 3.14;

//Con Notación Cientifica
const x = 1000000;
const n_grande = 1e6; // 1 millón
const n_pequeno = 1e-6; // 0.000001

console.log(n_grande);
console.log(n_pequeno);

//BigInt
const bigInt = 1234567891234567891234567891234567890n;
console.log(bigInt);

//Infinity
console.log(edad / 0);
console.log(Infinity);

//¿Es posible esto?
console.log("2" / 2);

//NaN (Error de Cálculo)
console.log("Hola" / 2); // NaN, tal división es errónea
console.log("Hola" * 4);

//STRINGS
console.log('################ STRINGS ################');
let nombre = "Victor";
let ciudad = "Osorno";
let capital = "Puerto Montt";
let string1 = "Hola ¿Cómo estás?";
let string2 = '¡Buenas Tardes!';
let frase = `Este es un saludo: ${string1}`; //Backticks

//Impresión Utilizando Backticks
console.log(frase);
console.log(`Mi nombre es: ${nombre}`);

//Utilizando el operador + de concatenación
console.log(ciudad + " y " + capital + " pertenecen a la Región de Los Lagos ");

//Operador con Comas
console.log('Mi nombre es ', nombre);
console.log(capital, "es la capital de la Región de Los Lagos");

//Utilizando el Método concat
console.log("Mi nombre es ".concat(nombre, "y vivo en ", ciudad));

//BOOLEANS
console.log('################ BOOLEANS ################');
let V = true;
let F = false;

if (V) {
    console.log("Es Verdadero");
} else {
    console.log("Es Falso");
}

//NULL
console.log('################ NULL ################');
let numero_nuevo = null;
console.log(numero_nuevo);

//UNDEFINED
console.log('################ UNDEFINED ################');
let institución;
console.log(institución); // arroja undefined

//OBJECT Y SYMBOL
console.log('################ OBJETOS ################');
let user = new Object(); 
let user1 = {}; 

let usuario = {
    name: "Mateo",
    age: 30,
    city: "Osorno",
    "correo electronico": "mateo@gmail.com"
};

usuario.provincia = "Provincia de Osorno";
usuario.estado = true;
usuario.pais = "Chile";
usuario.genero = "Masculino";

console.log(usuario);
console.log(usuario["correo electronico"]);
delete usuario.estado;
console.log(usuario);

console.log('################ SABER EL TIPO DE DATO ################');
console.log(typeof nombre);

//Transformando la Variable edad de Number a String
console.log('################ TRANSFORMANDO DE NUMBER A STRING ################');
console.log(typeof edad);
edad = String(edad);
console.log(typeof edad);

//Transformar un String a Number
let stock = "1000";
console.log('################ TRANSFORMANDO DE STRING A NUMBER ################');
console.log(typeof stock);
stock = Number(stock);
console.log(typeof stock);
console.log(stock);





//Utilizando el Prompt
let edad = prompt('¿Cuál es tu edad?', ''); 
alert(`Tienes ${edad} años!`);

//Utilizando el Confirm
let question = confirm("¿Pasarás el ramo?");
alert(question); 





//OPERANDOS Y OPERADORES
console.log('################ OPERANDOS Y OPERADORES ################');
let z = 1;
z = -z;
console.log(`El valor de z es ${z}`);

let x = 1, y = 3;
console.log(y - x);

console.log('################ CONCATENACIÓN CON EL BINARIO + ################');
console.log('1' + 2);
console.log(2 + '1');
console.log(1 + 1 + '2');
console.log('2' + 1 + 1);

console.log('################ SUMA UNARIA Y SUMA BINARIA ################');
let manzanas = 2;
console.log(+manzanas);
console.log(+true);
console.log(+false);
console.log(+"");

//Tercera Forma de Uso (Suma Unaria combinada con Suma Binaria)
let caja = "2";
let estantes = "5";
suma = console.log("La suma entre las cajas y estantes es: ", +caja + +estantes);

//OPERADOR RESTA
console.log('################ OPERADOR DE RESTA ################');
let tomates = 30;
let naranjas = 20;
console.log("La resta entre los tomates y naranjas es: ", tomates - naranjas);

//OPERADOR MULTIPLICACIÓN
console.log('################ OPERADOR DE PRODUCTO ################');
console.log("El producto entre los tomates y naranjas es: ", tomates * naranjas);

//OPERADOR DIVISIÓN
console.log('################ OPERADOR DE DIVISIÓN ################');
console.log("La División entre los tomates y naranjas es: ", tomates / naranjas);

//RESTO (%)
console.log('################ OPERADOR DE RESTO ################');
console.log(6 % 2);
console.log(8 % 3);

//POTENCIA (**)
console.log('################ OPERADOR DE EXPONENCIACIÓN ################');
console.log(2 ** 2);
console.log(2 ** 3);
console.log(4 ** (1 / 2));

//Asignaciones Encadenadas
console.log('################ ASIGNACIONES ENCADENADAS ################');
let a, b, c;
a = b = c = 5 + 5;
console.log(a);
console.log(b);
console.log(c);

//Modificación en el Lugar
console.log('################ MODIFICACIÓN/ASIGNACIÓN VARIABLES (OPERADOR) ################');
let n = 1;
n = n + 9;
console.log(n);
n += 5;
n *= 2;
console.log(n);

//Incremento / Decremento
console.log('################ INCREMENTO ################');
let contador = 1;
contador++;
console.log(contador);

console.log('################ DECREMENTO ################');
contador--;
console.log(contador);





// Utilizando las sentencias IF y Else
console.log('################ SETENCIAS IF/ELSE ################');
let year = prompt('¿En qué año se creo JavaScript', '');
if (year == 1995) {
    alert('¡Correcto, en el año 1995!');
} else {
    alert('Estás Equivocado');
}

// Sentencia Else IF
let year2 = prompt('¿En qué año se creo JavaScript', '');

if (year2 < 1995) {
    alert('Estás equivocado, el lenguaje aún no existía');
} else if (year2 > 1995) {
    alert('Estás equivocado, el lenguaje ya estaba creado');
} else {
    alert('¡Correcto!');
}


















//Convierte una cadena a un número entero.

parseInt("42");    // 42
parseInt("101", 2); // 5 (binario)





//Convierte una cadena a un número decimal (con decimales).

parseFloat("3.14"); // 3.14





//Convierte cualquier tipo de valor a número (entero o decimal).

Number("42");       // 42
Number("3.14");     // 3.14
Number(true);       // 1
Number(false);      // 0





//Convierte cualquier valor a cadena de texto.

String(42);         // "42"
String(true);       // "true"





//Convierte cualquier valor a booleano.

Boolean(1);         // true
Boolean(0);         // false
Boolean("text");    // true
