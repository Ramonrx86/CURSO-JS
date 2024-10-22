// Definición de la clase Producto
class Producto {
    // Constructor de la clase
    constructor(nombre, precio) {
        this.nombre = nombre; // Propiedad nombre
        this.precio = precio; // Propiedad precio
    }

    // Método para mostrar los detalles del producto
    mostrarDetalles() {
        console.log(`Producto: ${this.nombre}, Precio: $${this.precio.toFixed(2)}`);
    }
}

// Creación de instancias de la clase Producto
const producto1 = new Producto("Laptop AMD", 899.99);
const producto2 = new Producto("Teléfono SONY", 499.49);
const producto3 = new Producto("Auriculares PHILLIPS", 79.99);

// Invocación del método para mostrar los detalles de cada producto
producto1.mostrarDetalles();
producto2.mostrarDetalles();
producto3.mostrarDetalles();
