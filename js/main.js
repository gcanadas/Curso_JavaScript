
const iva = 0.21;
let total = 0;

// Solicito al usuario por prompt la cantidad de productos comprados

let cantProductos = parseInt(prompt("Por favor ingrese la cantidad de productos diferentes"));

// Para cada producto solicito el precio y la cantidad de articulos del mismo

for(let i=1; i <= cantProductos; i++){
    let precioProducto = parseFloat(prompt("Por favor ingrese el precio del " + i + " producto"));
    let cantArticulos = parseFloat(prompt("Por favor ingrese la cantidad de artículos del " + i + " producto"));
    total += precioProducto * cantArticulos;
}

console.log("El monto total de los " + cantProductos + " es de $" + total);
console.log("El monto total del IVA pagado fue de $" + (iva * total));
