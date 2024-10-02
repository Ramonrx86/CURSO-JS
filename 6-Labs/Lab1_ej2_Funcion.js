// solicitar la contraseña
function solicitar() {
  return prompt("Ingresa una contraseña:");
}

// validar la contraseña
function validar(password) {
  const longitudMinima = 8;
  const regexMayuscula = /[A-Z]/;
  const regexNumero = /[0-9]/;
  const regexEspecial = /[!@#$%^&*()_+\-{}\[\]:;<>.,?~\\]/;
  let esValida = true;

  if (password.length < longitudMinima) {
    console.log("Debe tener al menos 8 caracteres.");
    esValida = false;
  }

  if (!regexMayuscula.test(password)) {
    console.log("Debe contener al menos una letra mayúscula.");
    esValida = false;
  }

  if (!regexNumero.test(password)) {
    console.log("Debe contener al menos un número.");
    esValida = false;
  }

  if (!regexEspecial.test(password)) {
    console.log("Debe contener al menos un carácter especial.");
    esValida = false;
  }

  return esValida;
}

// resultado de la validación
function mostrar(esValida) {
  if (esValida) {
    alert("¡La contraseña es válida!");
  } else {
    alert("La contraseña no cumple con uno o más requisitos. Revisa la consola para más detalles");
  }
}

// Llamar a las funciones
let password = solicitar();
let esValida = validar(password);
mostrar(esValida);