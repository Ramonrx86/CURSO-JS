let tarifas = {
    diurno: { // Tarifas diurnas por día
        'luD': 120000,
        'maD': 120000,
        'miD': 120000,
        'juD': 120000,
        'viD': 120000,
        'saD': 120000,
        'doD': 140000 // Especial para domingo
    },
    nocturno: { // Tarifas nocturnas por día
        'luN': 160000,
        'maN': 160000,
        'miN': 160000,
        'juN': 160000,
        'viN': 160000,
        'saN': 160000,
        'doN': 190000 // Especial para domingo
    }
};

// Definición de empleados y sus días de trabajo
let empleados = {
    empleado1: ['luN', 'maN', 'miN', 'juD', 'viD'],
    empleado2: ['maN', 'miN', 'juN', 'doD'],
    empleado3: ['miD', 'juD', 'viD', 'saN', 'doN']
};

// Calcular y mostrar el total semanal por empleado
for (let empleado in empleados) {
    let total = 0;
    for (let dia of empleados[empleado]) {
        total += tarifas.nocturno[dia] || tarifas.diurno[dia]; // Sumar tarifa correspondiente segun dias
    }
    console.log("Total semanal de " + empleado + ": " + total + " CLP"); // Mostrar total de cada empleado
}
