let precioUnitario = 25;
let cantidad = 60;
let precioFinal;

let subtotal = precioUnitario * cantidad

if (cantidad < 10){
    precioFinal = subtotal;
}
else if (cantidad >= 10 && cantidad < 50) {
    precioFinal = subtotal * 0.9;
}
else {
    precioFinal = subtotal * 0.8;
}
console.log(precioFinal.toFixed(2));