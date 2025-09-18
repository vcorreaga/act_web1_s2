let precioUnitario = 25;
let cantidad = 60;
let precioTotal = precioUnitario * cantidad;
let precioFinal;

if (cantidad >= 50) {
  precioFinal = precioTotal * 0.80; 
} else if (cantidad >= 10) {
  precioFinal = precioTotal * 0.90;
} else {
  precioFinal = precioTotal;
}

console.log(precioFinal.toFixed(2));