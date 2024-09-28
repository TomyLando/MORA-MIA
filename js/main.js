// Configuración del sistema como objeto literal
const config = {
    maxStock: 100,
    mensaje: {
        cantidadMinima: "La cantidad debe ser mayor a 0.",
        yaExiste: "El producto ya existe en el stock.",
        productoNoEncontrado: "El producto no existe en el stock.",
        vacio: "El stock está vacío.",
        productoAgregado: (nombre, cantidad) => `Producto ${nombre} agregado con ${cantidad} unidades.`,
        productoAumentado: (nombre, cantidad) => `Se han agregado ${cantidad} unidades a ${nombre}.`,
        productoReducido: (nombre, cantidad) => `Se han eliminado ${cantidad} unidades de ${nombre}.`,
        excesoDeStock: (cantidad) => `No se puede agregar ${cantidad} unidades. El Límite máximo es ${maxStock}.`,
        programaTerminado: "Programa terminado.",
        opcionVegetal: "Opción no válida."
    }
};

// Variables
let stock = []; // Array para almacenar los productos en stock

// Clase para representar un Producto
class Producto {
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}

// Función para agregar un producto al stock
function agregarProducto(nombre, cantidad) {
    if (cantidad <= 0) {
        console.log(config.mensaje.cantidadMinima);
        return;
    }
    
    const productoExistente = stock.find(producto => producto.nombre === nombre);
    
    if (productoExistente) {
        // Si el producto ya existe, actualizamos la cantidad
        const nuevaCantidad = productoExistente.cantidad + cantidad;
        if (nuevaCantidad > config.maxStock) {
            console.log(config.mensaje.excesoDeStock(cantidad));
        } else {
            productoExistente.cantidad = nuevaCantidad;
            console.log(config.mensaje.productoAumentado(nombre, cantidad));
        }
    } else {
        // Si el producto no existe, lo agregamos al stock
        if (cantidad > config.maxStock) {
            console.log(config.mensaje.excesoDeStock(cantidad));
        } else {
            stock.push(new Producto(nombre, cantidad));
            console.log(config.mensaje.productoAgregado(nombre, cantidad));
        }
    }
}

// Función para eliminar productos del stock
function eliminarProducto(nombre, cantidad) {
    const producto = stock.find(producto => producto.nombre === nombre);
    
    if (!producto) {
        console.log(config.mensaje.productoNoEncontrado);
        return;
    }
    
    if (cantidad <= 0 || cantidad > producto.cantidad) {
        console.log(`Cantidad no válida. Cantidad actual de ${nombre}: ${producto.cantidad}`);
        return;
    }
    
    producto.cantidad -= cantidad;
    
    if (producto.cantidad === 0) {
        stock = stock.filter(p => p.nombre !== nombre); // Eliminar el producto del array si su cantidad es 0
        console.log(`Producto ${nombre} eliminado del stock.`);
    } else {
        console.log(config.mensaje.productoReducido(nombre, cantidad));
    }
}

// Función para mostrar el stock actual
function mostrarStock() {
    if (stock.length === 0) {
        console.log(config.mensaje.vacio);
        return;
    }
    
    console.log("Stock actual:");
    stock.forEach(producto => {
        console.log(`- ${producto.nombre}: ${producto.cantidad} unidades`);
    });
}

// Ciclo principal
function main() {
    let continuar = true;

    while (continuar) {
        const accion = prompt(`¿Qué acción desea realizar?
            1: Agregar
            2: Eliminar
            3: Mostrar stock
            4: Salir`);

        switch (accion) {
            case "1": // Agregar producto
                const nombreAgregar = prompt("Ingrese el nombre del producto a agregar:");
                const cantidadAgregar = parseInt(prompt("Ingrese la cantidad a agregar:"));
                agregarProducto(nombreAgregar, cantidadAgregar);
                break;

            case "2": // Eliminar producto
                const nombreEliminar = prompt("Ingrese el nombre del producto a eliminar:");
                const cantidadEliminar = parseInt(prompt("Ingrese la cantidad a eliminar:"));
                eliminarProducto(nombreEliminar, cantidadEliminar);
                break;

            case "3": // Mostrar stock
                mostrarStock();
                break;

            case "4": // Salir
                continuar = false;
                console.log(config.mensaje.programaTerminado);
                break;

            default:
                console.log(config.mensaje.opcionVegetal);
                break;
        }
    }
}

// Iniciar el programa
main();